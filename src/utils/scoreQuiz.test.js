// ✅ File: src/utils/scoreQuiz.test.js
import { describe, it, expect } from 'vitest';

const scoreQuiz = (questions, selectedAnswers) => {
  let score = 0;
  questions.forEach((q, index) => {
    const correct = q.options.find(opt => opt.includes('*'));
    if (selectedAnswers[index] === correct?.replace('*', '').trim()) {
      score++;
    }
  });
  return score;
};

describe('scoreQuiz', () => {
  const questions = [
    {
      q: 'Capital of France?',
      options: ['a) Berlin', 'b) *Paris', 'c) Madrid', 'd) Rome']
    },
    {
      q: '2 + 2 = ?',
      options: ['a) 3', 'b) 5', 'c) *4', 'd) 6']
    }
  ];

  it('scores correct answers properly', () => {
    const selected = ['Paris', '4'];
    expect(scoreQuiz(questions, selected)).toBe(2);
  });

  it('scores partial correct answers', () => {
    const selected = ['Berlin', '4'];
    expect(scoreQuiz(questions, selected)).toBe(1);
  });
});