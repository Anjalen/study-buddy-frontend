import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      const { data, error } = await supabase
        .from('progress')
        .select('user_id, quiz_score')
        .order('quiz_score', { ascending: false })
        .limit(5);

      if (!error && data) setLeaders(data);
    };

    fetchLeaders();
  }, []);

  return (
    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow mt-10 w-full max-w-md">
      <h3 className="text-2xl font-bold text-yellow-800 mb-4">🏆 Leaderboard</h3>

      {leaders.length === 0 ? (
        <p className="text-sm text-gray-500">No scores submitted yet.</p>
      ) : (
        <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-800">
          {leaders.map((entry, index) => (
            <li key={index} className={`flex justify-between items-center ${index === 0 ? 'font-bold text-yellow-700' : ''}`}>
              <span>
                👤 <span className="text-gray-700">{entry.user_id.slice(0, 6)}...</span>
              </span>
              <span>⭐ {entry.quiz_score}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Leaderboard;
