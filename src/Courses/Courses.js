import { useState } from "react";
import CourseDetails from "./CourseDetails/CourseDetails"
import CoursesList from "./CoursesList/CoursesList"

const Subjects = () => {

    const [courseSelected, setCourseSelected] = useState(1);

    return (
        <div className="courses">
            <CoursesList setCourseSelection={e => setCourseSelected(e)}/>
            <CourseDetails courseID={courseSelected}/>
        </div>
    );
}
 
export default Subjects;