🤖 AI Bot with Short-Term Memory (STM)

This project is a Node.js-based AI chatbot that implements Short-Term Memory (STM) to maintain conversational context for a limited number of recent messages.
It uses the Google Gemini API and demonstrates how memory can be managed efficiently to avoid token overflow and quota issues.

🚀 Features

🧠 Short-Term Memory (STM)

Stores only the last N messages

Prevents unlimited memory growth

💬 Context-aware responses

⚡ Real-time communication using Socket.io

🔒 Environment variable support using dotenv

🛑 API rate-limit handling (429 errors)

🧹 Automatic memory trimming

🧪 Beginner-friendly project structure

🛠️ Tech Stack

Backend: Node.js

AI Model: Google Gemini API

Realtime: Socket.io






🧠 How Short-Term Memory Works

Every user message is stored in an array called chatHistory

Only the last few messages are kept (configurable)

Older messages are removed automatically

Example:
const MAX_HISTORY = 6;

if (chatHistory.length > MAX_HISTORY) {
  chatHistory = chatHistory.slice(-MAX_HISTORY);
}


This ensures:

Lower token usage

Faster responses

No API quota exhaustion
Environment Config: dotenv

Dev Tool: Nodemon
