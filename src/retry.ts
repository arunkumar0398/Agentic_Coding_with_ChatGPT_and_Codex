export type RetryOptions = {
  attempts: number;
  delayMs?: number;
};

export async function retry<T>(
  operation: () => Promise<T>,
  { attempts, delayMs = 0 }: RetryOptions,
): Promise<T> {
  if (!Number.isInteger(attempts) || attempts < 1) {
    throw new Error("attempts must be a positive integer");
  }

  let lastError: unknown;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (attempt < attempts && delayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
  }

  throw lastError;
}
