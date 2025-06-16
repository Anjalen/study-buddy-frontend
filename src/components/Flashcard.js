import { useState } from "react";

const Flashcard = ({ card, onFlip }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
    onFlip(); // callback to count flips
  };

  return (
    <div
      onClick={handleClick}
      className="w-64 h-32 bg-white border rounded-lg shadow flex items-center justify-center text-center cursor-pointer p-4 transition-transform duration-300"
    >
      <p className="text-gray-800 text-sm font-semibold">
        {flipped ? card.def : card.term}
      </p>
    </div>
  );
};

export default Flashcard;
