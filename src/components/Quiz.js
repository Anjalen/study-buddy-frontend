import { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      q: "What is the powerhouse of the cell?",
      options: ["Nucleus", "*Mitochondria", "Ribosome", "Golgi"],
    },
    {
      q: "What is H2O?",
      options: ["Hydrogen", "*Water", "Oxygen", "Salt"],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleSelect = (opt) => {
    if (opt.includes("*")) setScore(score + 1);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setDone(true);
      let quizzes = Number(localStorage.getItem("quizzes") || 0) + 1;
      let totalScore = Number(localStorage.getItem("score") || 0) + score + 1;
      localStorage.setItem("quizzes", quizzes);
      localStorage.setItem("score", totalScore);
    }
  };

  const currentQ = questions[current];

  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h3 className="text-lg font-bold text-blue-800 mb-3">📝 Quiz Mode</h3>
      {done ? (
        <p className="font-semibold text-green-700">✅ Quiz Complete! Score: {score + 1}</p>
      ) : (
        <>
          <p className="mb-2 font-medium">{currentQ.q}</p>
          {currentQ.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(opt)}
              className="block w-full bg-blue-100 text-left p-2 rounded mb-2 hover:bg-blue-200"
            >
              {opt.replace("*", "")}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default Quiz;
