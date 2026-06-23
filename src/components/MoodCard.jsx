function MoodCard(props) {
  return (
    <div className="mood-card">
      <div className="card-header">
        <h2>
          {props.mood.emoji} {props.mood.mood}
        </h2>

        <button className="delete-btn" onClick={()=>props.onDelete(props.mood.id)}>
          🗑️
        </button>
      </div>

      <p>{props.mood.note}</p>

      <p>{props.mood.date}</p>
    </div>

    
  );
}

export default MoodCard;