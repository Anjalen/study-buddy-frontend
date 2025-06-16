import { useState } from "react";

const speak = (text) => {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  window.speechSynthesis.speak(utter);
};

const Flashcard = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
    let viewed = Number(localStorage.getItem("fc_viewed") || 0);
    localStorage.setItem("fc_viewed", viewed + 1);
  };

  return (
    <div
      onClick={handleFlip}
      className="w-64 h-32 border rounded shadow flex items-center justify-center text-center cursor-pointer p-4 bg-blue-50"
    >
      <div>
        <p className="font-medium">{flipped ? card.def : card.term}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            speak(`${card.term}: ${card.def}`);
          }}
          className="text-sm text-blue-500 underline mt-2"
        >
          🔊 Hear This
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
