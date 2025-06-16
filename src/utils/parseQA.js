export function parseQA(rawText) {
  const flashcards = [];
  const mcqs = [];
  const lines = rawText.split("\n");

  let currentQ = null;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.includes(":")) {
      const [term, def] = trimmed.split(":");
      if (term && def) {
        flashcards.push({ term: term.trim(), def: def.trim() });
      }
    } else if (/^\d+\./.test(trimmed)) {
      if (currentQ) mcqs.push(currentQ);
      currentQ = { q: trimmed.replace(/^\d+\.\s*/, ""), options: [] };
    } else if (/^[a-dA-D]\)/.test(trimmed)) {
      currentQ?.options.push(trimmed);
    }
  }

  if (currentQ) mcqs.push(currentQ);

  return { flashcards, mcqs };
}
