import { Link } from 'react-router-dom';

const CourseTile = ({ course, setDetails }) => {

    var setSelectedCourse = (id) => {
        setDetails(id);
    }

    return (
        <Link to="/courses">
            <div className="course-tile" onClick={() => setSelectedCourse(course.id)}>
                <div className="course-tile-img" style={{backgroundColor: course.color}}>
                </div>
                <div className="course-tile-info">
                    <h3>{ course.name }</h3>
                    <p><b>W:</b> { course.lecture }, <b>L:</b> { course.lab }</p>
                </div>
            </div>
        </Link>
    );
}
 
export default CourseTile;