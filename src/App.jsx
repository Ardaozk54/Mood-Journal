import { useState, useEffect } from "react";
import "./App.css";

import MoodForm from "./components/MoodForm";
import MoodList from "./components/MoodList";

function App() {
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [note, setNote] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [error, setError] = useState("");

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
    localStorage.setItem("moods", JSON.stringify(moods));
  }, [moods]);

  function addMood() {
    if (selectedEmoji === "") {
      setError("Please choose an emoji!");
      return;
    }

    if (selectedMood === "") {
      setError("Please choose a mood!");
      return;
    }

    if (selectedDate === "") {
      setError("Please choose a date!");
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

    setSelectedEmoji("");
    setSelectedMood("");
    setSelectedDate("");
    setNote("");
    setError("");
  }

  function deleteMood(id) {
    const updatedMoods = moods.filter(
      (mood) => mood.id !== id
    );

    setMoods(updatedMoods);
  }

  return (
    <div className="container">
      <h1>Mini Emoji Mood Journal</h1>

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
          error={error}
          addMood={addMood}
        />
      </div>

      <MoodList
        moods={moods}
        onDelete={deleteMood}
      />
    </div>
  );
}

export default App;