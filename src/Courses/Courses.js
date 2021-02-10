import { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import CourseDetails from "./CourseDetails/CourseDetails"
import CoursesList from "./CoursesList/CoursesList"
import CourseForm from "./CourseForm";
import useFetch from "../hooks/useFetch";
import CoursesHome from "./CoursesHome";

const Courses = () => {

    // const { data: courses, isPending, error } = useFetch('http://localhost:8000/courses');
    // const [courseSelected, setCourseSelected] = useState(courses ? courses[0].id : null);

    // useEffect(() => {
    //     setCourseSelected(courses ? courses[0].id : null);
    // }, [courses]);

    useEffect(() => {
        console.log('hello');
    });

    return (
        <div className="courses-box">
            <Route exact path="/courses/home" component={CoursesHome} />
            <Route exact path ="/courses/form" component={CourseForm} />
        </div>
    );
}
 
export default Courses;