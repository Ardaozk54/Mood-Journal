import { useState, useEffect, useRef } from "react";
import "./App.css";

import MoodForm from "./components/MoodForm";
import MoodList from "./components/MoodList";
import Toast from "./components/Toast";
import MoodModal from "./components/MoodModal";
import MoodNavbar from "./components/MoodNavbar";

const MOODS_PER_PAGE = 6;

const EMOJIS = ["😄", "😊", "😢", "😭", "😴", "😡", "😰", "🥳"];

const MOOD_TYPES = ["All", "Happy", "Normal", "Sad", "Angry", "Tired", "Stressed"];

function App() {
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [note, setNote] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMoodCard, setSelectedMoodCard] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [toast, setToast] = useState({ message: "", type: "" });

  const toastTimeoutRef = useRef(null);

  const [moods, setMoods] = useState(() => {
    const storedMoods = localStorage.getItem("moods");
    return storedMoods
      ? JSON.parse(storedMoods)
      : [{ id: 1, emoji: "😄", mood: "Happy", note: "Feeling positive, cheerful", date: "2026-06-23" }];
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moods));
  }, [moods]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter]);

  const sortedMoods = [...moods].sort((a, b) => b.date.localeCompare(a.date));

  const filteredMoods =
    selectedFilter === "All"
      ? sortedMoods
      : sortedMoods.filter((m) => m.mood === selectedFilter);

  const totalPages = Math.max(1, Math.ceil(filteredMoods.length / MOODS_PER_PAGE));

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const indexOfLast = currentPage * MOODS_PER_PAGE;
  const currentMoods = filteredMoods.slice(indexOfLast - MOODS_PER_PAGE, indexOfLast);

  function showToast(message, type) {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast({ message, type });
    toastTimeoutRef.current = setTimeout(() => setToast({ message: "", type: "" }), 3000);
  }

  function addMood() {
    if (!selectedEmoji) return showToast("❗ Please choose an emoji!", "error");
    if (!selectedMood) return showToast("❗ Please choose a mood!", "error");
    if (!selectedDate) return showToast("❗ Please choose a date!", "error");

    setMoods([...moods, { id: Date.now(), emoji: selectedEmoji, mood: selectedMood, note, date: selectedDate }]);
    showToast("✅ New mood successfully added!", "success");
    setSelectedEmoji("");
    setSelectedMood("");
    setSelectedDate("");
    setNote("");
  }

  function deleteMood(id) {
    if (!window.confirm("Are you sure you want to delete this mood?")) return;
    setMoods(moods.filter((m) => m.id !== id));
    showToast("❌ Mood deleted!", "deleted");
  }

  return (
    <>
      <MoodNavbar
        moodTypes={MOOD_TYPES}
        moods={moods}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        setCurrentPage={setCurrentPage}
        theme={theme}
        setTheme={setTheme}
      />

      <Toast toast={toast} />

      <MoodModal mood={selectedMoodCard} onClose={() => setSelectedMoodCard(null)} />

      <div className="container">
        <h1>Mini Emoji Mood Journal</h1>
        <p className="subtitle">"A small journal for big emotions."</p>

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
            emojis={EMOJIS}
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
