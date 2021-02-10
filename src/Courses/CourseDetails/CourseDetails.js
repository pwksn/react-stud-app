import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CourseResources from "./CourseResources";

const CourseDetails = ({ courses, courseID }) => {

    const currentCourse = courses.filter(course => course.id === courseID)[0];
    const history = useHistory();

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
                    {currentCourse.lecture && <div className="course-details-terms-lecture">
                        <ion-icon name="laptop-outline" color="#333"></ion-icon>
                        <h3>{ currentCourse.lecture }</h3>
                    </div>}
                    {currentCourse.lab &&<div className="course-details-terms-lab">
                        <ion-icon name="calculator-outline" color="#333"></ion-icon>
                        <h3>{ currentCourse.lab }</h3>
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

            {(currentCourse.upelLink || currentCourse.eLectureLink || currentCourse.driveLink) && <div className="course-details-resources">
                <CourseResources currentCourse={currentCourse}/>
            </div>}

            <div className="course-delete" onClick={handleCourseDelete}>
                <div className="course-delete-logo">
                    <ion-icon name="trash-outline" style={{color: "#eee", width: '2rem', height: '2rem'}}></ion-icon>
                </div>
            </div>
        </div>
    );
}
 
export default CourseDetails;