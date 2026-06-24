function MoodForm(props) {
  return (
    <>
     <div className="emoji-picker">
{
  props.emojis.map((emoji) => (
   <button
  key={emoji}
  className={
    props.selectedEmoji === emoji
      ? "emoji-btn selected"
      : "emoji-btn"
  }
  onClick={() => props.setSelectedEmoji(emoji)}
>
  {emoji}
</button>
  ))
}
</div>


      <select
        value={props.selectedMood}
        onChange={(e) =>
          props.setSelectedMood(e.target.value)
        }
      >
        <option value="">Choose Mood</option>
        <option value="Happy">Happy</option>
        <option value="Normal">Normal</option>
        <option value="Sad">Sad</option>
        <option value="Angry">Angry</option>
        <option value="Tired">Tired</option>
        <option value="Stressed">Stressed</option>
      </select>
      <input type="date" value={props.selectedDate} onChange={(e)=>props.setSelectedDate(e.target.value)} />

      <textarea
  placeholder="How do you feel today?"
  value={props.note}
  maxLength={200}
  onChange={(e) => props.setNote(e.target.value)}

/>   


<div className="note-header">
  <label></label>

  <small>
    {props.note.length}/200
  </small>
</div>

   

           <button className="add-btn" onClick={props.addMood}>Add Mood</button>


    </>

    
  );
}
export default MoodForm;





