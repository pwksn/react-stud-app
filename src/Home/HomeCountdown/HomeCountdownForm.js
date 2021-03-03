const HomeCountdownForm = ({ semesterEndDate, setSemesterEndDate, onSemesterEndDateChange }) => {

    const getDateValue = () => {
        if (typeof(semesterEndDate) === 'string') {
            return semesterEndDate;
        } else {
            return semesterEndDate.toISOString().split('T')[0];
        }
    }

    return (
        <div className="home-countdown-semester">
            <h2>Current semester ends on</h2>
            <input type="date" value={getDateValue()} onChange={(e) => setSemesterEndDate(e.target.value)}/>
            <button onClick={onSemesterEndDateChange}>Submit</button>
        </div>
    );
}
 
export default HomeCountdownForm;