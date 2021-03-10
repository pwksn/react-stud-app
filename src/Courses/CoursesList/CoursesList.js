import { useState } from "react";
import { Link } from 'react-router-dom';
import CourseTile from "./CourseTile"

const CoursesList = ({ courses, setCourseSelection }) => {

    const [activeCourses, setActiveCourses] = useState(courses);

    const onCourseSelection = (e) => {
        setCourseSelection(e);
    }

    return (
        <div className="courses-list">
            <div className="heading">
                <h1 className="header-1">Courses</h1>
                <Link to="/courses/form">
                    <button>
                        <ion-icon name="add-outline" style={{color: '#fff'}}></ion-icon>
                    </button>
                </Link>
            </div>
            <div className="course-tiles">
                {activeCourses.map((course) => (
                    <CourseTile course={course} key={course.id} setDetails={e => onCourseSelection(e)}/>
                ))}
            </div>
        </div>
    );
}
 
export default CoursesList;