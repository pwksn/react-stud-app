import HomeCountdown from "./HomeCountdown/HomeCountdown"
import useFetch from "../hooks/useFetch";
import HomeAssignments from "./HomeAssignments/HomeAssignments";
import HomeSchedule from "./HomeSchedule/HomeSchedule";

const Home = () => {

    // const { data: semester } = useFetch('http://localhost:8000/semester');
    const { data: semester } = useFetch('https://stud-w-web-app-default-rtdb.firebaseio.com/semester.json');
    // const { data: courses } = useFetch('http://localhost:8000/courses');
    const { data: courses } = useFetch('https://stud-w-web-app-default-rtdb.firebaseio.com/courses.json');

    return (
        <div className="home">
            <div className="home-countdown">
                {semester && <HomeCountdown semEndDate={semester.endDate}/>}
            </div>
            <div className="home-calendar">
                {courses && <HomeSchedule courses={Object.values(courses)} />}
            </div>
            <div className="home-assignments">
                {courses && <HomeAssignments courses={Object.values(courses)} />}
            </div>
        </div>
    );
}
 
export default Home;