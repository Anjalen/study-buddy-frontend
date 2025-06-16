export const updateStreak = () => {
  const today = new Date().toDateString();
  const last = localStorage.getItem("lastStudied");
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  let streak = Number(localStorage.getItem("streak") || 0);
  if (last !== today) {
    streak = last === yesterday ? streak + 1 : 1;
    localStorage.setItem("streak", streak);
    localStorage.setItem("lastStudied", today);
  }
  return streak;
};
