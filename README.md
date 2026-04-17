# Gemini AI Learning Journey 🚀

This repository tracks my hands-on learning with Gemini API, starting from a simple backend integration and gradually moving towards more advanced AI patterns.

## 📂 Roadmap

- [x] Phase 0: Hello AI (Basic API Call)
- [ ] Phase 1: Chat App (Session Management)
- [ ] Phase 2: Basic RAG (PDF Context)
- [ ] Phase 3: LangChain (Chains & Prompt Templates)
- [ ] Phase 4: Vector RAG (Vector Databases)
- [ ] Phase 5: LangGraph (Multi-Agent Workflows)
- [ ] Phase 6: MCP Experiments (Model Context Protocol)

## 🛠️ Tech Stack

- Frontend: Angular
- Backend: Node.js (Express)
- AI: Gemini API

---

## Learnings & Issues Faced

This was a simple setup, but debugging took more time than expected.

While integrating Gemini into a simple Express backend, I ran into quite a few hiccups along the way.

- I initially started with the official SDK (`@google/generative-ai`), but kept getting 404 errors and couldn’t figure out why
- After digging a bit more, I realized the SDK was internally calling `v1beta` endpoints, whereas the models I was trying to use were on `v1`
- Because of that mismatch, I switched to calling the API directly using axios, which finally started working

Some other issues I faced during this:

- API was not enabled in Google Cloud at first, which kept throwing "invalid API key" errors even though the key looked fine
- Model availability was confusing — some models were listed but not actually usable in my project
- Tried newer models (2.x), but they showed quota = 0 in free tier, so couldn’t use them
- Also hit a few `503` errors due to high demand, so added a simple retry mechanism in the backend to handle that

Next step is to connect this backend with Angular and build a simple chat UI...
