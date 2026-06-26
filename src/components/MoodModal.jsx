function MoodModal({ mood, onClose }) {
  if (!mood) return null;

  return (
    <div className="modal-overlay">
      <div className={`modal ${mood.mood.toLowerCase()}`}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>{mood.emoji} <span className="modal-badge">{mood.mood}</span></h2>
        <p className="modal-note">{mood.note}</p>
        <p className="modal-date">📅 {mood.date}</p>
      </div>
    </div>
  );
}

export default MoodModal;
