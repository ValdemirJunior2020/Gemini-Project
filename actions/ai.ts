'use server';
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function runAi(query: string) {
  // Start a new chat session each time to avoid reusing previous responses
  const chatSession = model.startChat({
    generationConfig,
    history: [],  // Clear history to prevent repeating the previous response
  });

  // Send the user's query to the AI model
  const result = await chatSession.sendMessage(query);

  // Return the AI's response
  return result.response.text();
}
