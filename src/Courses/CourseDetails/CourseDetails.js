import { courses } from '../../MockData/courses';
import CourseResources from "./CourseResources";

const CourseDetails = ({ courseID }) => {

    const currentCourse = courses.filter(course => course.id === courseID)[0];

    return (
        <div className="course-details">
            <div className="course-details-header">
                <div className="course-details-header-name">
                    <div className="course-tile-img" style={{backgroundColor: currentCourse.color}}> </div>
                    <h1> {currentCourse.name} </h1>
                </div>
                <div className="course-details-terms">
                    <div className="course-details-terms-lecture">
                        <ion-icon name="laptop-outline" color="#333"></ion-icon>
                        <h3>{ currentCourse.lecture }</h3>
                    </div>
                    <div className="course-details-terms-lab">
                        <ion-icon name="calculator-outline" color="#333"></ion-icon>
                        <h3>{ currentCourse.lab }</h3>
                    </div>
                </div>
                <div className="course-details-lecture">
                        <div className="course-details-lecture-location">
                            <ion-icon name="business-outline" color="#333"></ion-icon>
                            <p>{ currentCourse.location }</p>
                        </div>
                        <div className="course-details-lecture-lecturer">
                            <ion-icon name="person-circle-outline" color="#333"></ion-icon>
                            <p>{ currentCourse.lecturer }</p>
                        </div>
                </div>
            </div>

            <div className="course-details-resources">
                {/* <h2>Resources</h2>
                <div className="course-details-resources-tiles">
                    <div className="course-details-resources-tile course-details-resources-tile-upel" onClick={() => openInNewTab(currentCourse.upelLink)}>
                        <div className="course-details-resources-tile-logo course-details-resources-tile-upel-logo">
                            <ion-icon name="library-outline" style={{color: "#eee", width: '2rem', height: '2rem'}}></ion-icon>
                        </div>
                        <div className="course-details-resources-tile-text">
                            <h3>UPeL</h3>
                        </div>
                    </div>
                    <div className="course-details-resources-tile course-details-resources-tile-eLecture" onClick={() => openInNewTab(currentCourse.eLectureLink)}>
                        <div className="course-details-resources-tile-logo course-details-resources-tile-eLecture-logo">
                            <ion-icon name="videocam-outline" style={{color: "#eee", width: '2rem', height: '2rem'}}></ion-icon>
                        </div>
                        <div className="course-details-resources-tile-text">
                            <h3>e-Lecture</h3>
                        </div>
                    </div>
                    <div className="course-details-resources-tile course-details-resources-tile-drive" onClick={() => openInNewTab(currentCourse.driveLink)}>
                        <div className="course-details-resources-tile-logo course-details-resources-tile-drive-logo">
                            <ion-icon name="cloud-outline" style={{color: "#eee", width: '2rem', height: '2rem'}}></ion-icon>
                        </div>
                        <div className="course-details-resources-tile-text">
                            <h3>Drive</h3>
                        </div>
                    </div>
                </div> */}
                <CourseResources currentCourse={currentCourse}/>
            </div>
        </div>
    );
}
 
export default CourseDetails;