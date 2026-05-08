import { PromptTemplate } from "@langchain/core/prompts";

const chatPrompt = PromptTemplate.fromTemplate(`
    Answer the question based on the context below.
    Context: {context}
    Question: {question}
`);

export default chatPrompt;