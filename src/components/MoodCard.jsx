function MoodCard(props) {
  return (
<div className={`mood-card ${props.mood.mood.toLowerCase()}`} onClick={()=>    
 props.onView(props.mood)}>      
  <div className="card-header">
        <div className="mood-info">
    <h2>{props.mood.emoji}</h2>
    <span className="modal-badge">{props.mood.mood}</span>
  </div>

        <button className="delete-btn" onClick={(e)=>  {e.stopPropagation();  props.onDelete(props.mood.id)}}>
          🗑️
        </button>
      </div>

<p className="mood-note">
  {props.mood.note.length > 30
    ? props.mood.note.slice(0, 30) + "..."
    : props.mood.note}
</p>
      <p className="mood-date"> 📅 {props.mood.date}</p>

    </div>

    
  );
}

export default MoodCard;