import {useState,useEffect} from "react";
import "./App.css";


function App() {
  
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [note, setNote] = useState("");
  const [selectedDate,setSelectedDate]=useState("");
  const [error,setError] = useState("");

 const [moods, setMoods] = useState(() => {
  const storedMoods = localStorage.getItem("moods");

  return storedMoods
    ? JSON.parse(storedMoods)
    : [
        {
          id: 1,
          emoji: "😄",
          mood: "Happy",
          note: "Feeling positive, cheerful",
          date: "2026-06-23"
        }
      ];
});



useEffect(()=>{
  localStorage.setItem("moods", JSON.stringify(moods))
},[moods])

  return (
    <div className="container">
      <h1>Mini Emoji Mood Journal</h1>
     <div className="form-container">
      <input type="text" placeholder="Type Emoji" value={selectedEmoji}   onChange={(e) => setSelectedEmoji(e.target.value)} />

  <select value={selectedMood} onChange={(e)=>setSelectedMood(e.target.value)}>
      <option value="">Choose Mood</option>
       <option value="Happy">Happy</option>
       <option value="Normal">Normal</option>
       <option value="Sad">Sad</option>
       <option value="Angry">Angry</option>
       <option value="Tired">Tired</option>
       <option value="Stressed">Stressed</option>
  </select>

<input type="date" value={selectedDate} onChange={(e)=>setSelectedDate(e.target.value)} />


<textarea
  placeholder="How do you feel today?"
  value={note}
  maxLength={200}
  onChange={(e) => setNote(e.target.value)}
/>   
<div className="note-header">
  <label></label>

  <small>
    {note.length}/200
  </small>
</div>

      {error && <p className="error">{error}</p>}

           <button onClick={addMood}>Add Mood</button>
          

</div>


     {

      moods.length === 0 ? ( <p className="error" style={{textAlign: "center"}} >There are no any records.</p>) : 
      (
     moods.map((mood)=>(

      
  <div className="mood-card" key={mood.id}>

    <div className="card-header">
      <h2>
        {mood.emoji} {mood.mood}
      </h2>

      <button className="delete-btn" onClick={()=>deleteMood(mood.id)}>
        🗑️
      </button>
    </div>

    <p>{mood.note}</p>

    <p>{mood.date}</p>

  </div>

     )))}
    </div>



  );


function addMood(){

    if(selectedEmoji===""){
    setError("Please choose an emoji!");
    return;
  }
   if(selectedMood === ""){
  setError("Please choose an mood!");
  return;
  }
  if(selectedDate === ""){
  setError("Please choose a date!");
  return;
  }

  setMoods([
    ...moods,{
      id:Date.now(),
      emoji:selectedEmoji,
      mood: selectedMood,
      note: note,
      date: selectedDate
    }
  ]);

  setSelectedEmoji("");
  setSelectedMood("");
  setSelectedDate("");
  setError("");
  setNote("");
}


function deleteMood(id){
  const updatedMoods = moods.filter ( (mood) => mood.id != id);
    setMoods(updatedMoods);

}
}





export default App;