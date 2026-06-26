function MoodCard({ mood, onDelete, onView }) {
  return (
    <div className={`mood-card ${mood.mood.toLowerCase()}`} onClick={() => onView(mood)}>
      <div className="card-header">
        <div className="mood-info">
          <h2>{mood.emoji}</h2>
          <span className="modal-badge">{mood.mood}</span>
        </div>
        <button
          className="delete-btn"
          onClick={(e) => { e.stopPropagation(); onDelete(mood.id); }}
        >
          🗑️
        </button>
      </div>

      <p className="mood-note">
        {mood.note.length > 30 ? mood.note.slice(0, 30) + "..." : mood.note}
      </p>
      <p className="mood-date">📅 {mood.date}</p>
    </div>
  );
}

export default MoodCard;
