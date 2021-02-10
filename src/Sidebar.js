import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <Link to="/">
                    <ion-icon name="home-outline"></ion-icon>
                    Home
                </Link>
                <Link to="/courses/home">
                    <ion-icon name="school-outline"></ion-icon>
                    Courses
                </Link>
            </ul>
        </div>
    );
}
 
export default Sidebar;