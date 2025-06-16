import { describe, it, expect } from 'vitest';
import { parseQA } from './parseQA';

describe('parseQA', () => {
  const sample = `
1. What is water?
a) Fire
b) Earth
c) *Water
d) Wind

Photosynthesis: Process of making food
Osmosis: Movement of water
`;

  it('extracts flashcards correctly', () => {
    const { flashcards } = parseQA(sample);
    expect(flashcards).toHaveLength(2);
    expect(flashcards[0].term).toBe('Photosynthesis');
    expect(flashcards[0].def).toBe('Process of making food');
  });

  it('extracts MCQs correctly', () => {
    const { mcqs } = parseQA(sample);
    expect(mcqs).toHaveLength(1);
    expect(mcqs[0].q).toBe('What is water?');
    expect(mcqs[0].options).toHaveLength(4);
    expect(mcqs[0].options[2]).toContain('*Water');
  });
});
