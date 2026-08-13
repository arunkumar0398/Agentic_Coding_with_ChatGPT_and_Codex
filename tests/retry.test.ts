import { describe, expect, it, vi } from "vitest";
import { retry } from "../src/retry.js";

describe("retry", () => {
  it("returns on the first successful attempt", async () => {
    const operation = vi.fn().mockResolvedValue("ok");
    await expect(retry(operation, { attempts: 3 })).resolves.toBe("ok");
    expect(operation).toHaveBeenCalledTimes(1);
  });

  it("retries failures until success", async () => {
    const operation = vi.fn()
      .mockRejectedValueOnce(new Error("temporary"))
      .mockResolvedValueOnce("ok");

    await expect(retry(operation, { attempts: 2 })).resolves.toBe("ok");
    expect(operation).toHaveBeenCalledTimes(2);
  });

  it("throws the last failure after all attempts", async () => {
    const operation = vi.fn().mockRejectedValue(new Error("down"));
    await expect(retry(operation, { attempts: 2 })).rejects.toThrow("down");
    expect(operation).toHaveBeenCalledTimes(2);
  });
});
