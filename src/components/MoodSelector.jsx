const MOODS = [
  { emoji: '😄', label: 'Happy' },
  { emoji: '😌', label: 'Calm' },
  { emoji: '🤔', label: 'Curious' },
  { emoji: '😤', label: 'Frustrated' },
  { emoji: '😴', label: 'Tired' },
  { emoji: '🔥', label: 'Energized' },
];

export function MoodSelector({ activeMood, onSelect }) {
  return (
    <section className="mood-section">
      <p className="section-label">Mood of the Day</p>
      <div className="mood-buttons">
        {MOODS.map(({ emoji, label }) => (
          <button
            key={emoji}
            className={`mood-btn${activeMood === emoji ? ' active' : ''}`}
            title={label}
            onClick={() => onSelect(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
      {activeMood && <p className="mood-status">Today&apos;s mood: {activeMood}</p>}
    </section>
  );
}
