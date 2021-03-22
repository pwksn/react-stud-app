import { useState } from "react";
import HomeCountdownForm from "./HomeCountdownForm";

const HomeCountdown = ({ semEndDate }) => {

    const [semesterEndDateEdit, setSemesterEndDateEdit] = useState(false);
    const [semesterEndDate, setSemesterEndDate] = useState(new Date(semEndDate));

    const date = new Date();
    const dateDay = date.toLocaleDateString('en-GB', {day: 'numeric'});
    const dateMonthYear = date.toLocaleDateString('en-GB', {month: 'long', year: 'numeric'});
    const dateWeekday = date.toLocaleString('en-GB', {weekday: 'long'});

    const onSemesterEndDateChange = () => {
        const timestamp = Date.parse(semesterEndDate);
        setSemesterEndDate(new Date(timestamp));

        fetch('https://stud-w-web-app-default-rtdb.firebaseio.com/semester.json', {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({"endDate": semesterEndDate})
        }).then(() => {
            setSemesterEndDateEdit(!semesterEndDateEdit);
        })
    }

    const calculateDaysLeft = () => {
        return Math.ceil((semesterEndDate - date) / (1000 * 60 * 60 * 24))
    }

    return (
        <div className="home-countdown-box">
            <div className="home-countdown-date">
                <h2>{dateWeekday}</h2>
                <h1>{dateDay > 9 ? dateDay : 0 + dateDay}</h1>
                <h2>{dateMonthYear}</h2>
            </div>
            {!semesterEndDateEdit && 
            <div className="home-countdown-semester" onClick={() => setSemesterEndDateEdit(!semesterEndDateEdit)}>
                <h2>Current semester ends in</h2>
                <h1>{calculateDaysLeft()} days</h1>
            </div>}
            {semesterEndDateEdit && 
            <HomeCountdownForm semesterEndDate={semesterEndDate} setSemesterEndDate={setSemesterEndDate} onSemesterEndDateChange={onSemesterEndDateChange}/>}
        </div>
    );
}
 
export default HomeCountdown;