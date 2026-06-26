function MoodForm({ emojis, selectedEmoji, setSelectedEmoji, selectedMood, setSelectedMood, selectedDate, setSelectedDate, note, setNote, addMood }) {
  return (
    <>
      <div className="emoji-picker">
        {emojis.map((emoji) => (
          <button
            key={emoji}
            className={selectedEmoji === emoji ? "emoji-btn selected" : "emoji-btn"}
            onClick={() => setSelectedEmoji(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>

      <select value={selectedMood} onChange={(e) => setSelectedMood(e.target.value)}>
        <option value="">Choose Mood</option>
        <option value="Happy">Happy</option>
        <option value="Normal">Normal</option>
        <option value="Sad">Sad</option>
        <option value="Angry">Angry</option>
        <option value="Tired">Tired</option>
        <option value="Stressed">Stressed</option>
      </select>

      <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

      <textarea
        placeholder="How do you feel today?"
        value={note}
        maxLength={200}
        onChange={(e) => setNote(e.target.value)}
      />

      <div className="note-header">
        <small>{note.length}/200</small>
      </div>

      <button className="add-btn" onClick={addMood}>
        Add Mood
      </button>
    </>
  );
}

export default MoodForm;
