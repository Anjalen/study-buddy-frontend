import { useState } from "react";
import Flashcard from "./components/Flashcard";
import Quiz from "./components/Quiz";
import ProgressTracker from "./components/ProgressTracker";
import UploadArea from "./components/UploadArea";

function App() {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState({});
  const [progress, setProgress] = useState({
    flashcardsViewed: 0,
    quizzesTaken: 0,
    quizScore: 0,
  });

  const handleFlashcardFlip = () => {
    setProgress((prev) => ({
      ...prev,
      flashcardsViewed: prev.flashcardsViewed + 1,
    }));
  };

  const handleQuizEnd = (score) => {
    setProgress((prev) => ({
      ...prev,
      quizzesTaken: prev.quizzesTaken + 1,
      quizScore: prev.quizScore + score,
    }));
  };

  const parseQA = (rawText) => {
    const lines = rawText.split("\n").filter(Boolean);
    const flashcards = [];
    const mcqs = [];
    let currentQ = null;

    for (const line of lines) {
      if (line.includes(":")) {
        const [term, def] = line.split(":");
        flashcards.push({ term: term.trim(), def: def?.trim() || "" });
      } else if (line.match(/^\d+\.\s+/)) {
        if (currentQ) mcqs.push(currentQ);
        currentQ = { q: line.replace(/^\d+\.\s*/, ""), options: [] };
      } else if (line.match(/^[a-dA-D]\)/)) {
        currentQ?.options.push(line);
      }
    }

    if (currentQ) mcqs.push(currentQ);
    return { flashcards, mcqs };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex flex-col items-center justify-start py-12 px-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 flex items-center gap-2">
          📘 Study Buddy
        </h1>

        {/* Upload PDF + Generate Q&A */}
        <UploadArea setText={setText} setQuestions={setQuestions} />

        {/* Show preview text after upload */}
        {text && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">📄 Text Extract Preview:</h2>
            <div className="bg-gray-100 p-4 rounded-md max-h-[300px] overflow-y-auto whitespace-pre-wrap text-sm text-gray-800">
              {text}
            </div>
          </div>
        )}

        {/* Progress tracking */}
        <ProgressTracker progress={progress} />

        {/* Questions + flashcards */}
        {Object.entries(questions).length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">📚 Study Tools</h2>
            {Object.entries(questions).map(([title, rawText]) => {
              const { flashcards, mcqs } = parseQA(rawText);
              return (
                <div key={title} className="mt-6 bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-bold text-purple-700 mb-2">{title}</h3>

                  <h4 className="mt-2 font-semibold text-gray-700">📋 Flashcards</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                    {flashcards.map((fc, idx) => (
                      <Flashcard key={idx} card={fc} onFlip={handleFlashcardFlip} />
                    ))}
                  </div>

                  <h4 className="mt-6 font-semibold text-gray-700">📝 Quiz Mode</h4>
                  <Quiz questions={mcqs} onComplete={handleQuizEnd} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
