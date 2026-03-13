import { useEffect } from 'react';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  });
}

export function IdeaModal({ idea, onClose }) {
  // Close on Escape key
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <div className="modal-mood">{idea.mood || '💡'}</div>
        <p className="modal-date">{formatDate(idea.createdAt)}</p>
        <h2 className="modal-title">{idea.title}</h2>
        {idea.note
          ? <p className="modal-note">{idea.note}</p>
          : <p className="modal-note modal-note--empty">No notes added.</p>
        }
      </div>
    </div>
  );
}
