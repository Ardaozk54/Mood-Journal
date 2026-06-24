function MoodNavbar(props) {
  return (
    <div className="mood-navbar">

      {props.moodTypes.map((type) => {

        const count =
          type === "All"
            ? props.moods.length
            : props.moods.filter(
                mood => mood.mood === type
              ).length;

        return (
          <button
            key={type}
            className={
              props.selectedFilter === type
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() =>
              props.setSelectedFilter(type)
            }
          >
            {type} ({count})
          </button>
        );
      })}

    </div>
  );
}

export default MoodNavbar;