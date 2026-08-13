# MCP design exercise

Design an internal documentation MCP server with the smallest useful tool surface:

- `search_docs(query)`
- `get_doc(id)`
- `get_api_contract(service, version)`

Avoid exposing generic arbitrary-code or arbitrary-SQL tools when narrow tools satisfy the workflow.

In Codex, MCP configuration can be global or project-scoped. Verify the current official OpenAI MCP documentation before copying configuration into a real project.
