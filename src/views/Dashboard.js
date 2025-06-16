import { useEffect, useState } from "react";
import UploadBox from "../components/UploadBox";
import SummaryViewer from "../components/SummaryViewer";
import FlashcardViewer from "../components/FlashcardViewer";
import Quiz from "../components/Quiz";
import ProgressTracker from "../components/ProgressTracker";
import StudyStreak from "../components/StudyStreak";

// ✅ Streak Logic
const getStreak = () => {
  const lastStudy = localStorage.getItem("lastStudyDate");
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  let streak = parseInt(localStorage.getItem("studyStreak")) || 0;

  if (lastStudy === today) return streak;

  if (lastStudy === yesterday) {
    streak++;
  } else {
    streak = 1;
  }

  localStorage.setItem("lastStudyDate", today);
  localStorage.setItem("studyStreak", streak);

  return streak;
};

const Dashboard = () => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const currentStreak = getStreak();
    setStreak(currentStreak);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-blue-700">📘 Welcome to Study Buddy!</h1>
        <UploadBox />
        <StudyStreak streak={streak} />
        <ProgressTracker />
        <SummaryViewer />
        <FlashcardViewer />
        <Quiz />
      </div>
    </div>
  );
};

export default Dashboard;
