"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TextDisplayProps {
  text: string;
  onWordClick: (word: string) => void;
  onSentenceClick: (sentence: string) => void;
}

export default function TextDisplay({
  text,
  onSentenceClick,
}: TextDisplayProps) {
  const [definitions, setDefinitions] = useState<Record<string, string>>({});
  const [loadingWord, setLoadingWord] = useState<string | null>(null);

  const handleFetchDefinition = async (word: string) => {
    if (definitions[word] || loadingWord === word) return; // Already fetched or already loading

    setLoadingWord(word);
    try {
      const res = await fetch("/api/word-definition", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word }),
      });
      const data = await res.json();
      setDefinitions((prev) => ({ ...prev, [word]: data.definition }));
    } catch (error) {
      console.error("Failed to fetch definition", error);
    } finally {
      setLoadingWord(null);
    }
  };

  const sentences = [text.trim()];

  return (
    <TooltipProvider>
      <div className="mt-4 space-y-3">
        {sentences.map((sentence, i) => (
          <div
            key={i}
            onClick={() => onSentenceClick(sentence)}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            {sentence.split(" ").map((word, j) => {
              const cleanWord = word.replace(/[.,!?]/g, "");

              return (
                <Tooltip key={j}>
                  <TooltipTrigger
                    asChild
                    onMouseEnter={() => handleFetchDefinition(cleanWord)}
                    onTouchStart={() => handleFetchDefinition(cleanWord)}
                  >
                    <span className="text-blue-600 hover:underline cursor-pointer mx-1">
                      {word}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p className="max-w-xs text-sm">
                      <strong>{cleanWord}:</strong>{" "}
                      {loadingWord === cleanWord
                        ? "Loading..."
                        : definitions[cleanWord] || "No definition found"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
}
