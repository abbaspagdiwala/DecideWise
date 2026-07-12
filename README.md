# 🧠 DecideWise AI

> Stop guessing. Start making decisions with confidence.

DecideWise AI is an AI-powered decision assistant that helps users think through important decisions instead of making them impulsively.

Whether you're choosing a career path, planning your finances, or validating a startup idea, DecideWise asks structured questions, understands your situation, and generates personalized recommendations using AI.

Built for the **Mesh AI Hackathon 2026**.

---

# Why We Built This

We noticed that most AI assistants answer questions directly, but important life decisions usually need context.

Instead of asking:

> "Should I switch careers?"

DecideWise first understands your experience, goals, skills, available time, and other relevant details. Only then does it generate recommendations.

Our goal was to make AI reason with the user instead of simply responding.

---

# Features

### Available Today

- Career Decision Assistant
- Finance Decision Assistant
- Startup Decision Assistant
- Education Decision Assistant
- Relationships Decision Assistant
- Health Decision Assistant
- Travel Decision Assistant

---

# How It Works

```text
Choose a Decision
        ↓
Answer Guided Questions
        ↓
Generate Structured Prompt
        ↓
Express Backend
        ↓
Mesh API
        ↓
AI Recommendation
        ↓
Interactive Report
```

---

# Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React
- React Markdown

### Backend

- Node.js
- Express
- Mesh API

---

# Project Structure

```text
decision-os/

client/
    components/
    pages/
    data/
    services/
    utils/

server/
    routes/
    index.js

README.md
```

---

# Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/DecideWise.git
```

### 2. Start the frontend

```bash
cd client
npm install
npm run dev
```

### 3. Start the backend

```bash
cd server
npm install
npm run dev
```

### 4. Create a `.env` file inside the `server` folder

```env
MESH_API_KEY=your_mesh_api_key
PORT=3001
```

This keeps your API key private and allows the backend to securely communicate with Mesh API. Your actual key should **never** be committed to GitHub.

---

# Screenshots

![alt text](<screenshots/Screenshot 2026-07-11 192139.png>) ![alt text](<screenshots/Screenshot 2026-07-11 192214.png>) ![alt text](<screenshots/Screenshot 2026-07-11 192244.png>) ![alt text](<screenshots/Screenshot 2026-07-12 182516.png>) ![alt text](<screenshots/Screenshot 2026-07-12 182553.png>) ![alt text](<screenshots/Screenshot 2026-07-12 182606.png>) ![alt text](<screenshots/Screenshot 2026-07-12 182655.png>) ![alt text](<screenshots/Screenshot 2026-07-12 182712.png>) ![alt text](<screenshots/Screenshot 2026-07-12 182808.png>) ![alt text](<screenshots/Screenshot 2026-07-11 201939.png>) ![alt text](<screenshots/Screenshot 2026-07-11 202008.png>)

---

# Challenges We Solved

- Designing reusable decision flows
- Building a dynamic questionnaire system
- Creating structured prompts for different decision domains
- Connecting React with an Express backend
- Integrating the Mesh API securely
- Building a responsive and modern interface

---

# Future Improvements

- PDF report export
- More decision categories
- Decision history
- User accounts
- Multi-language support
- Voice-based interaction

---

# Team

Developed for the **Mesh AI Hackathon 2026**.

---

## License

MIT