"use client";

import { useState } from "react";
import TextInput from "./components/TextInput";
import TextDisplay from "./components/TextDisplay";

export default function HomePage() {
  const [text, setText] = useState("");
  const [meaning, setMeaning] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const handleTextSubmit = (submittedText: string) => {
    setText(submittedText);
    setMeaning("");
    setShowPanel(false);
  };

  const fetchMeaning = async (url: string, payload: object) => {
    setLoading(true);
    setShowPanel(true);
    setMeaning("");

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setMeaning(data.meaning || data.definition || "No explanation found.");
    } catch {
      setMeaning("Failed to load explanation.");
    } finally {
      setLoading(false);
    }
  };

  const handleWordClick = (word: string) => {
    fetchMeaning("/api/word-definition", { word });
  };

  const handleSentenceClick = (sentence: string) => {
    fetchMeaning("/api/sentence-meaning", { sentence });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Interactive Sentence and Word Explorer
      </h1>

      <TextInput onTextSubmit={handleTextSubmit} />

      {text && (
        <TextDisplay
          text={text}
          onWordClick={handleWordClick}
          onSentenceClick={handleSentenceClick}
        />
      )}

      {showPanel && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="font-semibold mb-2">Explanation</h2>
          <p className="text-gray-700">
            {loading ? (
              <span className="italic text-gray-500">Loading...</span>
            ) : (
              meaning
            )}
          </p>
        </div>
      )}
    </div>
  );
}
