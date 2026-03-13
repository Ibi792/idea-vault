import { useState, useDeferredValue, useMemo } from 'react';
import { getIdeas, saveIdea, deleteIdea, getMood, saveMood } from './storage';
import { MoodSelector } from './components/MoodSelector';
import { IdeaForm } from './components/IdeaForm';
import { IdeaList } from './components/IdeaList';
import { IdeaModal } from './components/IdeaModal';
import { SearchFilter } from './components/SearchFilter';

export default function App() {
  const [ideas, setIdeas] = useState(() => getIdeas());
  const [mood, setMood] = useState(() => getMood());
  const [query, setQuery] = useState('');
  const [filterMood, setFilterMood] = useState(null);
  const [selectedIdea, setSelectedIdea] = useState(null);

  // Deferred so the input always updates instantly; filtering runs at lower priority
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  function handleMoodSelect(emoji) {
    saveMood(emoji);
    setMood(emoji);
  }

  function handleCapture(title, notes) {
    const idea = saveIdea(title, notes, mood);
    setIdeas(prev => [idea, ...prev]);
  }

  function handleDelete(id) {
    deleteIdea(id);
    setIdeas(prev => prev.filter(i => i.id !== id));
  }

  // Memoized: only recomputes when ideas change, not on every render
  const moodOptions = useMemo(
    () => [...new Set(ideas.map(i => i.mood).filter(Boolean))],
    [ideas]
  );

  // Memoized: uses deferredQuery so filtering doesn't block the input
  const filteredIdeas = useMemo(() => {
    const q = deferredQuery.toLowerCase();
    return ideas
      .filter(idea =>
        idea.title.toLowerCase().includes(q) ||
        idea.note.toLowerCase().includes(q)
      )
      .filter(idea => filterMood === null || idea.mood === filterMood);
  }, [ideas, deferredQuery, filterMood]);

  return (
    <>
      <header className="site-header">
        <div className="logo">
          <div className="logo-icon">✎</div>
          <span className="logo-text">Idea<span>Vault</span></span>
        </div>
        <span className="header-badge">Mid-Term Project</span>
      </header>

      <main>
        <section className="hero">
          <p className="hero-eyebrow">Digital Ideas Journal</p>
          <h1>Never lose a <span className="highlight">great idea</span> again.</h1>
          <p className="hero-description">
            IdeaVault is a personal digital journal built to capture, organize,
            and revisit your best ideas — wherever inspiration strikes. Fast,
            clean, and built entirely in the browser.
          </p>
        </section>

        <MoodSelector activeMood={mood} onSelect={handleMoodSelect} />
        <IdeaForm mood={mood} onCapture={handleCapture} />

        <SearchFilter
          query={query}
          onQueryChange={setQuery}
          filterMood={filterMood}
          onFilterMood={setFilterMood}
          moodOptions={moodOptions}
        />

        <IdeaList
          ideas={filteredIdeas}
          onDelete={handleDelete}
          onSelect={setSelectedIdea}
          isStale={isStale}
        />
      </main>

      {selectedIdea && (
        <IdeaModal idea={selectedIdea} onClose={() => setSelectedIdea(null)} />
      )}

      <footer className="site-footer">
        IdeaVault &mdash; Mid-Term Project &mdash; {new Date().getFullYear()}
      </footer>
    </>
  );
}
