import { useState, useEffect , useRef} from "react";
import "./App.css";

import MoodForm from "./components/MoodForm";
import MoodList from "./components/MoodList";
import Toast from "./components/Toast";
import MoodModal from "./components/MoodModal";
function App() {
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [note, setNote] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMoodCard,setSelectedMoodCard]=useState(null);
  const [toast,setToast] = useState({
    message:"",
    type:"",
  });
  const moodsPerPage = 6;
  const toastTimeoutRef = useRef(null);
  const emojis = [
  "😄",
  "😊",
  "😢",
  "😭",
  "😴",
  "😡",
  "😰",
  "🥳",
];

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
            date: "2026-06-23",
          },
        ];
  });

  useEffect(() => {
  console.log(selectedMoodCard);
}, [selectedMoodCard]);
  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moods));
  }, [moods]);

  useEffect(()=>{ const totalPages = Math.max(1,Math.ceil(moods.length/moodsPerPage));

    if(currentPage>totalPages){
      setCurrentPage(totalPages);
    }
  },[moods,currentPage]);
  

  const sortedMoods = [...moods].sort((a,b)=>b.date.localeCompare(a.date));
  const indexOfLastMood=currentPage*moodsPerPage;
  const indexOfFirstMood = indexOfLastMood - moodsPerPage;

  const currentMoods =
  sortedMoods.slice(
    indexOfFirstMood,
    indexOfLastMood
  );
  
  const totalPages =
  Math.ceil(
    moods.length / moodsPerPage
  );

  function showToast(message,type) {

  if (toastTimeoutRef.current) {
    clearTimeout(toastTimeoutRef.current);
  }

  setToast({message,type});

  toastTimeoutRef.current = setTimeout(() => {
setToast({
  message: "",
  type: "",
});  }, 3000);
}

  function addMood() {

    if (selectedEmoji === "") {
      showToast("❗ Please choose an emoji!","error");
      return;
    }

    if (selectedMood === "") {
      showToast("❗ Please choose a mood!","error");
      return;
    }

    if (selectedDate === "") {
      showToast("❗ Please choose a date!","error");
      return;
    }

    setMoods([
      ...moods,
      {
        id: Date.now(),
        emoji: selectedEmoji,
        mood: selectedMood,
        note: note,
        date: selectedDate,
      },
    ]);
    showToast("✅ New mood Successfully added!","success");
    setSelectedEmoji("");
    setSelectedMood("");
    setSelectedDate("");
    setNote("");
  }

  function deleteMood(id) {

    const isConfirmed=window.confirm("Are you sure you want to delete this mood?");
    if(!isConfirmed){
      return;
    }

    const updatedMoods = moods.filter(
      (mood) => mood.id !== id
    );

    setMoods(updatedMoods);

    showToast("❌ Mood deleted!","deleted");
  }

  return (

    <>
    
  <Toast
    toast={toast}
  />

  <MoodModal
  mood={selectedMoodCard}
  onClose={() =>
    setSelectedMoodCard(null)
  }
/>



    
    <div className="container">
    <h1>Mini Emoji Mood Journal</h1>

    <p className="subtitle">
     "A small journal for big emotions."
    </p>    
      

      <div className="form-container">
        <MoodForm
          selectedEmoji={selectedEmoji}
          setSelectedEmoji={setSelectedEmoji}
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          note={note}
          setNote={setNote}
          addMood={addMood}
          emojis={emojis}
         
        />
      </div>

      <MoodList
        moods={currentMoods}
        onDelete={deleteMood}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onView={setSelectedMoodCard}

      />

    
    </div>
    </>
  );
}





export default App;