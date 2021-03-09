import { Link } from 'react-router-dom';

const CourseTile = ({ course, setDetails }) => {

    var setSelectedCourse = (id) => {
        setDetails(id);
    }

    return (
        <Link to="/courses/home">
            <div className="course-tile" onClick={() => setSelectedCourse(course.id)}>
                <div className="course-tile-img" style={{backgroundColor: course.color}}>
                </div>
                <div className="course-tile-info">
                    <h3>{ course.name }</h3>
                    <p>
                        {course.lecture.lectureHour ? <b>Lec:</b> : null} { course.lecture.lectureDay } { course.lecture.lectureHour } 
                        {course.lecture.lectureHour && course.lab.labHour ? <b>, </b> : null}
                        {course.lab.labHour ? <b>Lab:</b> : null} { course.lab.labDay } { course.lab.labHour }  
                    </p>
                </div>
            </div>
        </Link>
    );
}
 
export default CourseTile;