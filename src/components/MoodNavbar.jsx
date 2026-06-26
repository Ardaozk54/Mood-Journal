function MoodNavbar({ moodTypes, moods, selectedFilter, setSelectedFilter, theme, setTheme }) {
  return (
    <div className="mood-navbar">
      {moodTypes.map((type) => {
        const count = type === "All" ? moods.length : moods.filter((m) => m.mood === type).length;
        return (
          <button
            key={type}
            className={selectedFilter === type ? "filter-btn active" : "filter-btn"}
            onClick={() => setSelectedFilter(type)}
          >
            {type} ({count})
          </button>
        );
      })}

      <button
        className="theme-btn"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default MoodNavbar;
