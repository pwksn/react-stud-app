import { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import CourseDetails from "./CourseDetails/CourseDetails"
import CoursesList from "./CoursesList/CoursesList"

const CoursesHome = ({ setCurrentCourse }) => {

    const { data: courses, isPending, error } = useFetch('http://localhost:8000/courses');
    const [courseSelected, setCourseSelected] = useState(null);

    useEffect(() => {
        setCourseSelected(courses ? courses[0].id : null);
    }, [courses]);

    const callbackFunction = (courseDetailsData) => {
        console.log(courseDetailsData);
        setCurrentCourse(courseDetailsData);
    }

    return (
        <div className="courses">
            {/* {courses && <Route exact path="/courses" render={(props) => <CoursesList {...props} courses={courses} setCourseSelection={e => setCourseSelected(e)}/>}/>} */}
            {courses && <CoursesList courses={courses} setCourseSelection={e => setCourseSelected(e)}/>}
            {courseSelected && courses && <CourseDetails courses={courses} courseID={courseSelected} parentCallback={callbackFunction}/>}
            {/* {courseSelected && courses && <Route exact path="/courses" render={(props) => <CourseDetails {...props} courses={courses} courseID={courseSelected}/>}/>} */}
            {error && <h1 className="loading-placeholder">{error} :(</h1>}
            {isPending && <h1 className="loading-placeholder">Loading...</h1>}
        </div>
    );
}
 
export default CoursesHome;