import { useState } from "react";
import { Route } from 'react-router-dom';
import CourseDetails from "./CourseDetails/CourseDetails"
import CoursesList from "./CoursesList/CoursesList"
import CourseForm from "./CourseForm";
import useFetch from "../hooks/useFetch";

const Courses = () => {

    const [courseSelected, setCourseSelected] = useState(1);
    const { data: courses, isPending, error } = useFetch('http://localhost:8000/courses');

    return (
        <div className="courses">
            {courses && <CoursesList courses={courses} setCourseSelection={e => setCourseSelected(e)}/>}
            {courses && <Route exact path="/courses" render={(props) => <CourseDetails {...props} courses={courses} courseID={courseSelected}/>}/>}
            {error && <h1 className="loading-placeholder">{error} :(</h1>}
            {isPending && <h1 className="loading-placeholder">Loading...</h1>}
            <Route exact path ="/courses/form" component={CourseForm} />
        </div>
    );
}
 
export default Courses;