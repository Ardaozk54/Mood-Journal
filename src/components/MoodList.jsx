import MoodCard from "./MoodCard";

function MoodList({ moods, onDelete, onView, totalPages, currentPage, setCurrentPage }) {
  return (
    <>
      <div className="mood-list">
        {moods.length === 0 ? (
          <p className="error" style={{ textAlign: "center" }}>There are no any records.</p>
        ) : (
          moods.map((mood) => (
            <MoodCard key={mood.id} mood={mood} onDelete={onDelete} onView={onView} />
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>←</button>

          <div className="page-numbers">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={currentPage === i + 1 ? "page-btn active" : "page-btn"}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>→</button>
        </div>
      )}
    </>
  );
}

export default MoodList;
