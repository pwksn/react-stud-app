import HomeCountdown from "./HomeCountdown/HomeCountdown"
import useFetch from "../hooks/useFetch";

const Home = () => {

    const { data: semester, isPending, error } = useFetch('http://localhost:8000/semester');

    return (
        <div className="home">
            <div className="home-countdown">
                {semester && <HomeCountdown semEndDate={semester.endDate}/>}
            </div>
            <div className="home-calendar">
                HomeCalendar
            </div>
            <div className="home-assignments">
                HomeAssignments
            </div>
        </div>
    );
}
 
export default Home;