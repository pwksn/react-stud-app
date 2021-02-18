const CourseProgressForm = ({ pointsEarned, pointsPossible, setPointsEarned, setPointsPossible, handleSubmit }) => {
    return (
        <div className="course-progress-form-box">
            <form className="course-progress-form" onSubmit={handleSubmit}>
                <div className="d-flex">
                    <input type="number" value={pointsEarned} onChange={(e) => setPointsEarned(e.target.value)} style={{direction: 'rtl'}}/>
                    <p>/</p>
                    <input type="number" value={pointsPossible} onChange={(e) => setPointsPossible(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default CourseProgressForm;