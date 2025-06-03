"use client";

import { useState } from "react";

interface TextInputProps {
  onTextSubmit: (text: string) => void;
}

export default function TextInput({ onTextSubmit }: TextInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onTextSubmit(input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="w-full p-2 border rounded"
        rows={6}
        placeholder="Paste or write your text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
}
