const CourseResources = ({ currentCourse }) => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null;
    }

    return (
        <div>
            <h2>Resources</h2>
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
                </div>
        </div>
    );
}
 
export default CourseResources;