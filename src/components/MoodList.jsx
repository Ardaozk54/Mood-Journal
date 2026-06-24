import MoodCard from "./MoodCard";

function MoodList(props) {
  return (
    <>
    <div className="mood-list">
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
            onView={props.onView}
          />
        ))
      )}
     
      </div>
       {props.totalPages > 1 && (
  <div className="pagination">

    <button
      onClick={() =>
        props.setCurrentPage(props.currentPage - 1)
      }
      disabled={props.currentPage === 1}
    >
      ←
    </button>

 <div className="page-numbers">
  {[...Array(props.totalPages)].map((_, index) => (
    <button
      key={index + 1}
      className={
        props.currentPage === index + 1
          ? "page-btn active"
          : "page-btn"
      }
      onClick={() =>
        props.setCurrentPage(index + 1)
      }
    >
      {index + 1}
    </button>
  ))}
</div>

    <button 
      onClick={() =>
        props.setCurrentPage(props.currentPage + 1)
      }
      disabled={props.currentPage === props.totalPages}
    >
      →
    </button>

  </div>
)}
    </>
  );
}

export default MoodList;