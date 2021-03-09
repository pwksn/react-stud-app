import { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import CourseDetails from "./CourseDetails/CourseDetails"
import CoursesList from "./CoursesList/CoursesList"

const CoursesHome = ({ setCurrentCourse }) => {

    const { data: courses, isPending, error } = useFetch('http://localhost:8000/courses');
    const [courseSelected, setCourseSelected] = useState(null);
    const [requestData, setRequestData] = useState(new Date());

    useEffect(() => {
        setCourseSelected(courses?.length ? courses[0].id : null);
    }, [courses]);

    const callbackFunction = (courseDetailsData) => {
        setCurrentCourse(courseDetailsData);
    }

    const onCourseAssignmentsChange = (data, method) => {
        if (method === 'remove') {
            const currentCourse = courses.find(course => course.id === courseSelected);
            currentCourse.assignments?.splice(data, 1);
            fetch('http://localhost:8000/courses/' + currentCourse.id, {
                        method: 'DELETE'
                    }).then(() => {
                        fetch('http://localhost:8000/courses', {
                            method: 'POST',
                            headers: { "Content-Type": "application/json"},
                            body: JSON.stringify(currentCourse)
                        }).then(() => {
                            setRequestData(new Date());
                        })
                    })
        } else if (method === 'add') {
            fetch('http://localhost:8000/courses/' + data.id, {
                        method: 'DELETE'
                    }).then(() => {
                        fetch('http://localhost:8000/courses', {
                            method: 'POST',
                            headers: { "Content-Type": "application/json"},
                            body: JSON.stringify(data)
                        }).then(() => {
                            setRequestData(new Date());
                        })
                    })
        }
        
    }

    return (
        <div className="courses">
            {courses && <CoursesList courses={courses.sort((a, b) => a.id - b.id)} setCourseSelection={e => setCourseSelected(e)}/>}
            {courseSelected && courses && <CourseDetails courses={courses} courseID={courseSelected} parentCallback={callbackFunction} onCourseAssignmentsChange={onCourseAssignmentsChange}/>}
            {error && <h1 className="loading-placeholder">{error} :(</h1>}
            {isPending && <h1 className="loading-placeholder">Loading...</h1>}
        </div>
    );
}
 
export default CoursesHome;