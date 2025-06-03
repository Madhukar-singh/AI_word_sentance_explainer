# Word & Sentence Explorer

An interactive web app built with **Next.js** and **TypeScript** that lets users explore the meanings of words (via hover) and sentences (via click). It fetches word definitions from the [DictionaryAPI.dev](https://dictionaryapi.dev) and uses a custom API for sentence meaning (AI model like Gemini).

---

## Features

- Hover over words to get definitions.
- Click on any sentence to see its meaning.
- Tooltips and explanation panel.
- Built using React, Tailwind CSS, TypeScript, and ShadCN UI.
- Extensible and lightweight.

---

## Technologies Used

- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI (Tooltip)
- **State**: React useState
- **APIs**:
  - Dictionary API (for word definitions): `https://api.dictionaryapi.dev/api/v2/entries/en/<word>`
  - Optional AI (e.g., OpenAI) for sentence explanations

---

## DEMO LINK
[https://ai-word-sentance-explainer.vercel.app/)](https://ai-word-sentance-explainer.vercel.app)

## Installation & Setup

> Requires: **Node.js ≥ 18**, **npm ≥ 9**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Madhukar-singh/AI_word_sentance_explainer.git
   cd word-sentence-explorer
   ```

2. **npm install**
   run npm install

3. **GEMINI_API_KEY=your-gemini-api-key**
   Add GEMINI_API_KEY=your-gemini-api-key

4. **npm run dev**
   npm run dev

5. **Run on browser**
   http://localhost:3000
