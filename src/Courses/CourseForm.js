import { useState } from "react";
import { useHistory } from "react-router-dom";

const CourseForm = ({ onCoursesPostSend }) => {

    const [courseName, setCourseName] = useState('');
    const [courseSem, setCourseSem] = useState('');
    const [lectureDate, setLectureDate] = useState('');
    const [labDate, setLabDate] = useState('');
    const [courseLocation, setCourseLocation] = useState('');
    const [courseLecturer, setCourseLecturer] = useState('');
    const [courseColor, setCourseColor] = useState('');
    const [upelLink, setUpelLink] = useState('');
    const [eLectureLink, setELectureLink] = useState('');
    const [driveLink, setDriveLink] = useState('');

    const [isPostPending, setIsPostPending] = useState(false);
    const history = useHistory();

    const onFormCancel = () => {
        history.push('/courses');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCourse = {
            name: courseName,
            sem: 'sem-' + courseSem,
            color: courseColor,
            lecture: lectureDate,
            lab: labDate,
            location: courseLocation,
            lecturer: courseLecturer,
        };

        setIsPostPending(true);

        fetch('http://localhost:8000/courses', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newCourse)
        }).then(() => {
            setIsPostPending(false);
            //onCoursesPostSend();
            history.push('/courses');
        })
    }

    return (
        <div className="course-form">
            <h1>New Course</h1>
            <form onSubmit={handleSubmit}>
                <div className="d-flex">
                    <div>
                        <label>Course name:</label>
                        <input
                            type="text"
                            required
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Semester:</label>
                        <input
                            type="number"
                            required
                            min="1"
                            max="3"
                            value={courseSem}
                            onChange={(e) => setCourseSem(e.target.value)}
                        />
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <label>Lecture date:</label>
                        <input
                            type="text"
                            required
                            value={lectureDate}
                            onChange={(e) => setLectureDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Lab date:</label>
                        <input
                            type="text"
                            required
                            value={labDate}
                            onChange={(e) => setLabDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <label>Location:</label>
                        <input
                            type="text"
                            value={courseLocation}
                            onChange={(e) => setCourseLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Lecturer:</label>
                        <input
                            type="text"
                            value={courseLecturer}
                            onChange={(e) => setCourseLecturer(e.target.value)}
                        />
                    </div>
                </div>
                <label>Course color:</label>
                <input
                    type="color"
                    value={courseColor}
                    onChange={(e) => setCourseColor(e.target.value)}
                />
                <label>UPEL link:</label>
                <input
                    type="text"
                    value={upelLink}
                    onChange={(e) => setUpelLink(e.target.value)}
                />
                <label>E-lecture link:</label>
                <input
                    type="text"
                    value={eLectureLink}
                    onChange={(e) => setELectureLink(e.target.value)}
                />
                <label>Drive link:</label>
                <input
                    type="text"
                    value={driveLink}
                    onChange={(e) => setDriveLink(e.target.value)}
                />

                <div className="d-flex">
                    <button className="btn-cancel" onClick={onFormCancel}>Cancel</button>
                    {!isPostPending && <button type="submit">Submit</button>}
                    {isPostPending && <button disabled type="submit">Wait...</button>}
                </div>
            </form>
        </div>
    );
}
 
export default CourseForm;