# 🌸 Mini Emoji Mood Journal

A simple and elegant mood tracking app built with React. Log your daily emotions, add notes, and review your mood history — all saved locally in your browser.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Custom-ec4899)

## ✨ Features

- **Emoji Picker** — Choose an emoji that matches your mood
- **Mood Categories** — Happy, Normal, Sad, Angry, Tired, Stressed
- **Notes** — Write how you're feeling (up to 200 characters)
- **Filter by Mood** — Browse entries by mood type
- **Pagination** — Neatly paginated mood history
- **Dark / Light Mode** — Smooth theme switching, saved to localStorage
- **Toast Notifications** — Instant feedback on actions
- **Mood Detail Modal** — Click any card to see full details
- **Persistent Storage** — All data saved in localStorage, nothing is lost on refresh

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS (no UI library — fully custom)

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Ardaozk54/Mood-Journal.git
cd Mood-Journal

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── MoodCard.jsx      # Individual mood card
│   ├── MoodForm.jsx      # Add new mood form
│   ├── MoodList.jsx      # Grid of mood cards + pagination
│   ├── MoodModal.jsx     # Full detail modal
│   ├── MoodNavbar.jsx    # Filter navbar + theme toggle
│   └── Toast.jsx         # Notification toast
├── App.jsx               # Main app logic & state
├── App.css               # All styles
└── main.jsx
```

> Light mode and dark mode supported.

## 🙋‍♂️ Author

**Arda Özkan** — [@Ardaozk54](https://github.com/Ardaozk54)

---

*First React project — built to learn hooks, component structure, and localStorage.* 🚀