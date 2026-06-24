function MoodModal(props) {

  if (!props.mood) {
    return null;
  }

  return (
    <div className="modal-overlay">
        

      <div   className={`modal ${props.mood.mood.toLowerCase()}`}
>

        <button
          className="modal-close"
          onClick={props.onClose}
        >
          ✕
        </button>

        <h2>
          {props.mood.emoji} 
          <span className="modal-badge">{props.mood.mood}</span>
        </h2>

        <p className="modal-note">
          {props.mood.note}
        </p>

        <p className="modal-date">
          📅 {props.mood.date}
        </p>

      </div>

    </div>
  );
}

export default MoodModal;