import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const CourseForm = ({ currentFormCourse }) => {

    const [courseName, setCourseName] = useState('');
    const [lectureDay, setLectureDay] = useState('Mon');
    const [lectureHour, setLectureHour] = useState('');
    const [labDay, setLabDay] = useState('Mon');
    const [labHour, setLabHour] = useState('');
    const [courseLocation, setCourseLocation] = useState('');
    const [courseLecturer, setCourseLecturer] = useState('');
    const [courseColor, setCourseColor] = useState('');
    const [upelLink, setUpelLink] = useState('');
    const [eLectureLink, setELectureLink] = useState('');
    const [driveLink, setDriveLink] = useState('');
    const [assignments, setAssignments] = useState(null);
    const [pointsEarned, setPointsEarned] = useState(0);
    const [pointsPossible, setPointsPossible] = useState(0);


    const [isPostPending, setIsPostPending] = useState(false);
    const history = useHistory();
    const { id } = useParams();

    const onFormCancel = (e) => {
        e.preventDefault(); // without this line: Warning: Form submission canceled because the form is not connected
        history.push('/courses/home');
    }

    useEffect(() => {
        if (id) {
            setEditedCourseData();
        }
    }, [id]);

    const setEditedCourseData = () => {
        console.log(currentFormCourse);
        setCourseName(currentFormCourse.name);
        setLectureDay(currentFormCourse.lecture.lectureDay);
        setLectureHour(currentFormCourse.lecture.lectureHour);
        setLabDay(currentFormCourse.lab.labDay);
        setLabHour(currentFormCourse.lab.labHour);
        setCourseLocation(currentFormCourse.location);
        setCourseLecturer(currentFormCourse.lecturer);
        setCourseColor(currentFormCourse.color);
        setUpelLink(currentFormCourse.upelLink);
        setELectureLink(currentFormCourse.eLectureLink);
        setDriveLink(currentFormCourse.driveLink);
        setAssignments(currentFormCourse.assignments);
        setPointsEarned(currentFormCourse.pointsEarned);
        setPointsPossible(currentFormCourse.pointsPossible);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCourse = {
            name: courseName,
            color: courseColor,
            lecture: {
                lectureDay: lectureDay,
                lectureHour: lectureHour
            },
            lab: {
                labDay: labDay,
                labHour: labHour
            },
            location: courseLocation,
            lecturer: courseLecturer,
            upelLink: upelLink,
            eLectureLink: eLectureLink,
            driveLink: driveLink,
            assignments: assignments,
            pointsEarned: pointsEarned,
            pointsPossible: pointsPossible
        };

        setIsPostPending(true);

        if (id) {
            fetch('http://localhost:8000/courses/' + id, {
                    method: 'DELETE'
                }).then(() => {
                    fetch('http://localhost:8000/courses', {
                        method: 'POST',
                        headers: { "Content-Type": "application/json"},
                        body: JSON.stringify(newCourse)
                    }).then(() => {
                        setIsPostPending(false);
                        history.push('/courses/home');
                    })
                })
        } else {
            fetch('http://localhost:8000/courses', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(newCourse)
            }).then(() => {
                setIsPostPending(false);
                history.push('/courses/home');
            })
        }
    }

    return (
        <div className="course-form">
            {!id && <h1>New Course</h1>}
            {id && <h1>{courseName} - edit course</h1>}
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
                </div>
                <div className="d-flex">
                    <div>
                        <label>Lecture day:</label>
                        <select 
                        value={lectureDay} 
                        onChange={(e) => setLectureDay(e.target.value)}>
                            <option value="Mon">Monday</option>
                            <option value="Tue">Tuesday</option>
                            <option value="Wed">Wednesday</option>
                            <option value="Thu">Thursday</option>
                            <option value="Fri">Friday</option>
                            <option value="Sat">Saturday</option>
                            <option value="Sun">Sunday</option>
                            <option value="">None</option>
                        </select>
                    </div>
                    <div>
                        <label>Lecture hour:</label>
                        <input
                            type="text"
                            value={lectureHour}
                            onChange={(e) => setLectureHour(e.target.value)}
                        />
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <label>Lab day:</label>
                        <select 
                        value={labDay} 
                        onChange={(e) => setLabDay(e.target.value)}>
                            <option value="Mon">Monday</option>
                            <option value="Tue">Tuesday</option>
                            <option value="Wed">Wednesday</option>
                            <option value="Thu">Thursday</option>
                            <option value="Fri">Friday</option>
                            <option value="Sat">Saturday</option>
                            <option value="Sun">Sunday</option>
                            <option value="">None</option>
                        </select>
                    </div>
                    <div>
                        <label>Lab hour:</label>
                        <input
                            type="text"
                            value={labHour}
                            onChange={(e) => setLabHour(e.target.value)}
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