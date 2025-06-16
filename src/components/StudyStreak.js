const streak = localStorage.getItem("streak") || 0;

const StudyStreak = () => (
  <div className="bg-blue-100 p-4 rounded-md">
    <h3 className="text-lg font-bold text-blue-800">🔥 Your Study Streak</h3>
    <p className="text-blue-700">You're on a {streak}-day streak. Keep it up!</p>
  </div>
);


export default StudyStreak;


