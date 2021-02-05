import { useState, useEffect } from "react";
import CourseTile from "./CourseTile"
import SemesterPicker from "./SemesterPicker"
import { courses } from '../../MockData/courses';

const CoursesList = ({ setCourseSelection }) => {

    const [activeSemester, setActiveSemester] = useState('sem-1');
    const [activeCourses, setActiveCourses] = useState(courses);

    const onCourseSelection = (e) => {
        setCourseSelection(e);
    }

    const setActiveSemesterCourses = () => {
        if (activeSemester === 'sem-all') {
            setActiveCourses(courses);
        } else {
            const activeSemesterCourses = courses.filter(course => course.sem === activeSemester);
            setActiveCourses(activeSemesterCourses);
        }
    }

    // useEffect(() => {
    //     setActiveSemesterCourses();
    // }, [activeSemester]);

    useEffect(setActiveSemesterCourses, [activeSemester]);

    return (
        <div className="courses-list">
            <div className="heading">
                <h1 className="header-1">Courses</h1>
                <button>
                    <ion-icon name="add-outline" color="#fff"></ion-icon>
                </button>
            </div>
            <SemesterPicker activeSem={activeSemester} setActiveSem={setActiveSemester}/>
            <div className="course-tiles">
                {activeCourses.map((course) => (
                    <CourseTile course={course} key={course.id} setDetails={e => onCourseSelection(e)}/>
                ))}
            </div>
        </div>
    );
}
 
export default CoursesList;