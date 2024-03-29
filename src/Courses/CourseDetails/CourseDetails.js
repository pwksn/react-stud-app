import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import CourseAssignments from "./CourseAssignments/CourseAssignments";
import CourseProgress from "./CourseProgress/CourseProgress";
import CourseResources from "./CourseResources";

const CourseDetails = ({ courses, courseID, parentCallback, onCourseAssignmentsChange }) => {

    const currentCourse = courses.filter(course => course.id === courseID)[0];
    const history = useHistory();

    const sendCurrentCourse = () => {
        parentCallback(currentCourse);
    }

    const handleCourseDelete = () => {
        fetch('http://localhost:8000/courses/' + currentCourse.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="course-details">
            <div className="course-details-header">
                <div className="course-details-header-name">
                    <div className="course-tile-img" style={{backgroundColor: currentCourse.color}}> </div>
                    <h1> {currentCourse.name} </h1>
                </div>
                <div className="course-details-terms">
                    {currentCourse.lecture.lectureHour && <div className="course-details-terms-lecture">
                        <ion-icon name="laptop-outline" color="#333"></ion-icon>
                        <h3>{ currentCourse.lecture.lectureDay } { currentCourse.lecture.lectureHour }</h3>
                    </div>}
                    {currentCourse.lab.labHour &&<div className="course-details-terms-lab">
                        <ion-icon name="calculator-outline" color="#333"></ion-icon>
                        <h3>{ currentCourse.lab.labDay } { currentCourse.lab.labHour }</h3>
                    </div>}
                </div>
                <div className="course-details-lecture">
                        {currentCourse.location && <div className="course-details-lecture-location">
                            <ion-icon name="business-outline" color="#333"></ion-icon>
                            <p>{ currentCourse.location }</p>
                        </div>}
                        {currentCourse.lecturer &&<div className="course-details-lecture-lecturer">
                            <ion-icon name="person-circle-outline" color="#333"></ion-icon>
                            <p>{ currentCourse.lecturer }</p>
                        </div>}
                </div>
            </div>

            <div className="course-progress">
                <CourseProgress currentCourse={currentCourse} onCourseAssignmentsChange={onCourseAssignmentsChange}/>
            </div>

            {(currentCourse.upelLink || currentCourse.eLectureLink || currentCourse.driveLink) && <div className="course-details-resources">
                <CourseResources currentCourse={currentCourse}/>
            </div>}

            <div className="course-assignments">
                <CourseAssignments currentCourse={currentCourse} onCourseAssignmentsChange={onCourseAssignmentsChange}/>
            </div>

            <div className="course-changes">
                <div className="course-edit" onClick={sendCurrentCourse}>
                    <Link to={`/courses/form/${courseID}`}>
                        <div className="course-edit-logo">
                            <ion-icon name="settings-outline" style={{color: "#eee", width: '2rem', height: '2rem'}}></ion-icon>
                        </div>
                    </Link>
                </div>

                <div className="course-delete" onClick={handleCourseDelete}>
                    <div className="course-delete-logo">
                        <ion-icon name="trash-outline" style={{color: "#eee", width: '2rem', height: '2rem'}}></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CourseDetails;