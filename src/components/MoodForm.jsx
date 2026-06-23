function MoodForm(props) {
  return (
    <>
      <input
        type="text"
        placeholder="Type Emoji"
        value={props.selectedEmoji}
        onChange={(e) =>
          props.setSelectedEmoji(e.target.value)
        }
      />

      <select
        value={props.selectedMood}
        onChange={(e) =>
          setSelectedMood(e.target.value)
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

      {props.error && <p className="error">{props.error}</p>}

           <button onClick={props.addMood}>Add Mood</button>


    </>

    
  );
}
export default MoodForm;





