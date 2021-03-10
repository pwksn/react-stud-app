import { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import CourseDetails from "./CourseDetails/CourseDetails"
import CoursesList from "./CoursesList/CoursesList"
import CourseForm from "./CourseForm";
import useFetch from "../hooks/useFetch";
import CoursesHome from "./CoursesHome";

const Courses = () => {

    const [currentCourse, setCurrentCourse] = useState(null);

    const setCurrentCourseCallback = (currentCourse) => {
        setCurrentCourse(currentCourse);
    }

    return (
        <div className="courses-box">
            <Route exact path="/courses/home" render={(props) => <CoursesHome {...props} setCurrentCourse={setCurrentCourseCallback}/>}/>
            <Route exact path="/courses/form/:id?" render={(props) => <CourseForm {...props} currentFormCourse={currentCourse}/>}/>
        </div>
    );
}
 
export default Courses;