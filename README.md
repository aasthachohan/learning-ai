# Gemini AI Learning Journey 🚀

This repository tracks my progress from basic Gemini API integration to advanced Agentic workflows.

## 📂 Roadmap
- [x] **Phase 0:** Hello AI (Basic API Call)
- [ ] **Phase 1:** Chat App (Session Management)
- [ ] **Phase 2:** Basic RAG (PDF Context)
- [ ] **Phase 3:** LangChain (Chains & Prompt Templates)
- [ ] **Phase 4:** Vector RAG (Vector Databases)
- [ ] **Phase 5:** LangGraph (Multi-Agent Workflows)
- [ ] **Phase 6:** MCP Experiments (Model Context Protocol)

## 🛠️ Tech Stack
- **Frontend:** Angular
- **Backend:** Node.js (Express)
- **AI:** Gemini 1.5 Flash/Pro, LangChain

## Learnings

- SDK (@google/generative-ai) uses v1beta endpoints
- New Gemini models require v1 endpoints
- Switched to REST API for stability
- Handled real-world issues:
  - API enablement
  - invalid keys
  - model availability
  - quota limits
  - retry logic