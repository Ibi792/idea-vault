import { useState, useRef } from 'react';

export function IdeaForm({ mood, onCapture }) {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const titleRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (onCapture) onCapture(title, notes);
    setTitle('');
    setNotes('');
    titleRef.current.focus();
  }

  return (
    <section className="form-section">
      <form className="idea-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="ideaTitle">Title</label>
        <input
          ref={titleRef}
          id="ideaTitle"
          type="text"
          className="form-input"
          placeholder="What's your idea?"
          maxLength={120}
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label className="form-label" htmlFor="ideaNotes">Notes</label>
        <textarea
          id="ideaNotes"
          className="form-textarea"
          placeholder="Add a note (optional)..."
          rows={4}
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
        <button type="submit" className="btn-primary">
          Capture {mood || ''}
        </button>
      </form>
    </section>
  );
}
