import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseDetails from "./CourseDetails/CourseDetails"
import CoursesList from "./CoursesList/CoursesList"
import CourseForm from "./CourseForm";

const Subjects = () => {

    const [courseSelected, setCourseSelected] = useState(1);

    return (
        <div className="courses">
            <CoursesList setCourseSelection={e => setCourseSelected(e)}/>
            <Route exact path="/courses" render={(props) => <CourseDetails {...props} courseID={courseSelected}/>}/>
            <Route exact path ="/courses/form" component={CourseForm} />
            {/* <CourseDetails courseID={courseSelected}/> */}
        </div>
    );
}
 
export default Subjects;