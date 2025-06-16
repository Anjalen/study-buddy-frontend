// ✅ File: src/components/ProgressDashboard.js
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ProgressDashboard = ({ progress, streak }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { name: "Flashcards", value: progress.flashcardsViewed },
      { name: "Quizzes", value: progress.quizzesTaken },
      { name: "Score", value: progress.quizScore },
    ]);
  }, [progress]);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mt-10 w-full max-w-3xl">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">📊 Your Study Progress</h2>
      <p className="text-sm text-green-600 dark:text-green-400 mb-2">🔥 {streak}-day study streak!</p>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#888" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressDashboard;
