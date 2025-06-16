const ProgressTracker = () => {
  const flashcardsViewed = localStorage.getItem("fc_viewed") || 0;
  const quizzesTaken = localStorage.getItem("quizzes") || 0;
  const quizScore = localStorage.getItem("score") || 0;

  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">📊 Your Study Progress</h3>
      <p>Flashcards viewed: {flashcardsViewed}</p>
      <p>Quizzes taken: {quizzesTaken}</p>
      <p>Total score: {quizScore}</p>
    </div>
  );
};

export default ProgressTracker;
