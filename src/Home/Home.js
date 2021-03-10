import HomeCountdown from "./HomeCountdown/HomeCountdown"
import useFetch from "../hooks/useFetch";
import HomeAssignments from "./HomeAssignments/HomeAssignments";
import HomeSchedule from "./HomeSchedule/HomeSchedule";

const Home = () => {

    const { data: semester } = useFetch('http://localhost:8000/semester');
    const { data: courses } = useFetch('http://localhost:8000/courses');

    return (
        <div className="home">
            <div className="home-countdown">
                {semester && <HomeCountdown semEndDate={semester.endDate}/>}
            </div>
            <div className="home-calendar">
                <HomeSchedule courses={courses} />
            </div>
            <div className="home-assignments">
                <HomeAssignments courses={courses} />
            </div>
        </div>
    );
}
 
export default Home;