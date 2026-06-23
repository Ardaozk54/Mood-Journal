import MoodCard from "./MoodCard";

function MoodList(props) {
  return (
    <>
      {props.moods.length === 0 ? (
        <p className="error" style={{ textAlign: "center" }}>
          There are no any records.
        </p>
      ) : (
        props.moods.map((mood) => (
          <MoodCard
            key={mood.id}
            mood={mood}
            onDelete={props.onDelete}
          />
        ))
      )}
    </>
  );
}

export default MoodList;