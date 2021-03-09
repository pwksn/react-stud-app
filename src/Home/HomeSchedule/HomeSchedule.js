import { useEffect, useState } from "react";
import HomeScheduleTile from "./HomeScheduleTile";

const HomeSchedule = ({ courses }) => {

    const date = new Date();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [activeWeekday, setActiveWeekday] = useState(date.getDay());

    useEffect(() => {
        sortCoursesByDay();
    }, [activeWeekday]);

    const sortCoursesByDay = () => {
        if (courses) {
            const lecturesSorted = courses.filter(course => course.lecture.lectureDay === weekdays[activeWeekday]);
            const labsSorted = courses.filter(course => course.lab.labDay === weekdays[activeWeekday]);
            sortCoursesByHour(lecturesSorted, 'lecture');
            sortCoursesByHour(labsSorted, 'lab');
            return [lecturesSorted, labsSorted];
        }
    }

    const sortCoursesByHour = (courses, type) => {
        courses.sort((a, b) => {
            return(getCourseStartHour(a, type) - getCourseStartHour(b, type));
        })
    }

    const getCourseStartHour = (course, type) => {
        if (type === 'lecture') {
            const courseHour = course.lecture.lectureHour.split(":").join("");
            return courseHour;
        } else {
            const courseHour = course.lab.labHour.split(":").join("");
            return courseHour; 
        }
    }

    return (
        <div className="home-schedule-box">
            <h2>Schedule</h2>
            <div className="home-schedule-content">
                <div className="home-schedule-daypicker">
                    <button className={`${activeWeekday === 1 ? "picker-button-active" : ""}`} value={1} onClick={() => setActiveWeekday(1)}>Mon</button>
                    <button className={`${activeWeekday === 2 ? "picker-button-active" : ""}`} value={2} onClick={() => setActiveWeekday(2)}>Tue</button>
                    <button className={`${activeWeekday === 3 ? "picker-button-active" : ""}`} value={3} onClick={() => setActiveWeekday(3)}>Wed</button>
                    <button className={`${activeWeekday === 4 ? "picker-button-active" : ""}`} value={4} onClick={() => setActiveWeekday(4)}>Thu</button>
                    <button className={`${activeWeekday === 5 ? "picker-button-active" : ""}`} value={5} onClick={() => setActiveWeekday(5)}>Fri</button>
                    <button className={`${activeWeekday === 6 ? "picker-button-active" : ""}`} value={6} onClick={() => setActiveWeekday(6)}>Sat</button>
                    <button className={`${activeWeekday === 0 ? "picker-button-active" : ""}`} value={0} onClick={() => setActiveWeekday(0)}>Sun</button>
                </div>

                <div className="home-schedule-day">
                    <div className="home-schedule-day-lectures">
                        <h3>Lectures</h3>
                        {
                            courses && sortCoursesByDay()[0].map(course => (
                                <div className="home-schedule-day-tile" key={course.lab.labDay + course.lab.labHour + course.lecture.lectureDay + course.lecture.lectureHour}>
                                    <HomeScheduleTile course={course} type="lecture"/>
                                </div>
                            ))
                        }
                    </div>

                    <div className="home-schedule-day-labs">
                        <h3>Labs</h3>
                        {
                            courses && sortCoursesByDay()[1].map(course => (
                                <div className="home-schedule-day-tile" key={course.lab.labDay + course.lab.labHour + course.lecture.lectureDay + course.lecture.lectureHour}>
                                    <HomeScheduleTile course={course} type="lab"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomeSchedule;