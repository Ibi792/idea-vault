export function SearchFilter({ query, onQueryChange, filterMood, onFilterMood, moodOptions }) {
  return (
    <section className="search-filter-section">
      <input
        type="search"
        className="form-input search-input"
        placeholder="Search ideas..."
        value={query}
        onChange={e => onQueryChange(e.target.value)}
      />

      {moodOptions.length > 0 && (
        <div className="filter-moods">
          <button
            className={`filter-mood-btn${filterMood === null ? ' active' : ''}`}
            onClick={() => onFilterMood(null)}
          >
            All
          </button>
          {moodOptions.map(emoji => (
            <button
              key={emoji}
              className={`filter-mood-btn${filterMood === emoji ? ' active' : ''}`}
              onClick={() => onFilterMood(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
