import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import CourseDetails from "./CourseDetails/CourseDetails"
import CoursesList from "./CoursesList/CoursesList"

const CoursesHome = ({ setCurrentCourse }) => {

    const { data: courses, isPending, error } = useFetch('https://stud-w-web-app-default-rtdb.firebaseio.com/courses.json');
    const [courseSelected, setCourseSelected] = useState(null);
    const [requestData, setRequestData] = useState(new Date());
    const history = useHistory();

    useEffect(() => {
        if (courses) {
            setCourseSelected(Object.values(courses)?.length ? Object.values(courses)[0].id : null);
        } 
    }, [courses]);

    useEffect(() => {
        if (!courses && !isPending) {
            history.push('/courses/form');
        }
    }, [isPending])

    const callbackFunction = (courseDetailsData) => {
        setCurrentCourse(courseDetailsData);
    }

    const onCourseAssignmentsChange = (data, method) => {

        if (method === 'remove') {
            const currentCourse = Object.values(courses).find(course => course.id === courseSelected);
            currentCourse.assignments?.splice(data, 1);
            fetch('https://stud-w-web-app-default-rtdb.firebaseio.com/courses/' + currentCourse.id + '.json', {
                        method: 'DELETE'
                    }).then(() => {
                        fetch('https://stud-w-web-app-default-rtdb.firebaseio.com/courses/' + currentCourse.id + '.json', {
                            method: 'PUT',
                            headers: { "Content-Type": "application/json"},
                            body: JSON.stringify(currentCourse)
                        }).then(() => {
                            setRequestData(new Date());
                        })
                    })
        } else if (method === 'add') {
            fetch('https://stud-w-web-app-default-rtdb.firebaseio.com/courses/' + data.id + '.json', {
                        method: 'DELETE'
                    }).then(() => {
                        fetch('https://stud-w-web-app-default-rtdb.firebaseio.com/courses/' + data.id + '.json', {
                            method: 'PUT',
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
            {courses && <CoursesList courses={Object.values(courses).sort((a, b) => a.id - b.id)} setCourseSelection={e => setCourseSelected(e)}/>}
            {courseSelected && courses && <CourseDetails courses={Object.values(courses)} courseID={courseSelected} parentCallback={callbackFunction} onCourseAssignmentsChange={onCourseAssignmentsChange}/>}
            {error && <h1 className="loading-placeholder">{error} :(</h1>}
            {isPending && <h1 className="loading-placeholder">Loading...</h1>}
        </div>
    );
}
 
export default CoursesHome;