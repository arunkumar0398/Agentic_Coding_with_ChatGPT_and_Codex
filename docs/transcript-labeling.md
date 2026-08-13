# Transcript evidence labels

The book uses three labels so readers can tell what was actually executed during production.

- **CAPTURED LOCALLY** - output produced in the book production container and saved under `transcripts/`.
- **VERIFIED COMMAND RECIPE** - command syntax checked against current first-party documentation or source, but not executed as an authenticated Codex run in this container.
- **ILLUSTRATIVE AGENT TURN** - a teaching example written by the author. It is not represented as real Codex output.

A fourth label, **LIVE RUN REQUIRED**, marks exercises that require a signed-in Codex CLI or an OpenAI API key. The production environment intentionally did not contain user credentials, so those outputs are left for the reader rather than fabricated.
