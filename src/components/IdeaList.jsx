function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, {
    month: 'short', day: 'numeric', year: 'numeric',
  });
}

export function IdeaList({ ideas, onDelete, onSelect, isStale }) {
  if (ideas.length === 0) {
    return (
      <section className="ideas-section">
        <p className="empty-state">No ideas yet. Add your first one above!</p>
      </section>
    );
  }

  return (
    <section className="ideas-section" style={{ opacity: isStale ? 0.5 : 1, transition: 'opacity 0.15s ease' }}>
      <p className="section-label">Your Ideas — {ideas.length} saved</p>
      <div className="ideas-list">
        {ideas.map(idea => (
          <div
            key={idea.id}
            className="idea-card"
            onClick={() => onSelect(idea)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && onSelect(idea)}
          >
            <div className="idea-card-header">
              <span className="idea-mood">{idea.mood || ''}</span>
              <span className="idea-date">{formatDate(idea.createdAt)}</span>
              <button
                className="btn-delete"
                title="Delete idea"
                onClick={e => { e.stopPropagation(); onDelete(idea.id); }}
              >
                &times;
              </button>
            </div>
            <h3 className="idea-title">{idea.title}</h3>
            {idea.note && <p className="idea-note">{idea.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
