import { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import CourseDetails from "./CourseDetails/CourseDetails"
import CoursesList from "./CoursesList/CoursesList"
import CourseForm from "./CourseForm";
import useFetch from "../hooks/useFetch";

const Courses = () => {

    const { data: courses, isPending, error } = useFetch('http://localhost:8000/courses');
    const [courseSelected, setCourseSelected] = useState(courses ? courses[0].id : null);

    useEffect(() => {
        setCourseSelected(courses ? courses[0].id : null);
    }, [courses]);

    return (
        <div className="courses">
            {/* {courses && <CoursesList courses={courses} setCourseSelection={e => setCourseSelected(e)}/>} */}
            {courses && <Route exact path="/courses" render={(props) => <CoursesList {...props} courses={courses} setCourseSelection={e => setCourseSelected(e)}/>}/>}
            {courseSelected && courses && <Route exact path="/courses" render={(props) => <CourseDetails {...props} courses={courses} courseID={courseSelected}/>}/>}
            {error && <h1 className="loading-placeholder">{error} :(</h1>}
            {isPending && <h1 className="loading-placeholder">Loading...</h1>}
            <Route exact path ="/courses/form" component={CourseForm} />
        </div>
    );
}
 
export default Courses;