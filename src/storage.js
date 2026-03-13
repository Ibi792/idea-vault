// ── Storage Keys ───────────────────────────────────────────
const KEYS = {
  ideas: 'ideavault_ideas',
  mood:  'ideavault_mood',
};

// ── Low-level helper ───────────────────────────────────────
function storageGet(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function storageSet(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ── Ideas CRUD ─────────────────────────────────────────────
export function getIdeas() {
  return storageGet(KEYS.ideas, []);
}

export function saveIdea(title, note, mood) {
  const ideas = getIdeas();
  const idea = {
    id: Date.now().toString(),
    title: title.trim(),
    note: note.trim(),
    mood: mood || null,
    createdAt: new Date().toISOString(),
  };
  ideas.unshift(idea);
  storageSet(KEYS.ideas, ideas);
  return idea;
}

export function updateIdea(id, changes) {
  const ideas = getIdeas();
  const idx = ideas.findIndex(i => i.id === id);
  if (idx === -1) return null;
  ideas[idx] = { ...ideas[idx], ...changes };
  storageSet(KEYS.ideas, ideas);
  return ideas[idx];
}

export function deleteIdea(id) {
  const updated = getIdeas().filter(i => i.id !== id);
  storageSet(KEYS.ideas, updated);
}

// ── Mood (one per day) ─────────────────────────────────────
export function getMood() {
  const stored = storageGet(KEYS.mood, null);
  if (!stored) return null;
  const today = new Date().toISOString().slice(0, 10);
  return stored.date === today ? stored.emoji : null;
}

export function saveMood(emoji) {
  const date = new Date().toISOString().slice(0, 10);
  storageSet(KEYS.mood, { emoji, date });
}
