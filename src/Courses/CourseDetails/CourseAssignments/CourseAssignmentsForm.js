import { useEffect, useState } from "react";

const CourseAssignmentsForm = ({ onAssignmentAdd }) => {

    const [assignmentName, setAssignmentName] = useState('');
    const [assignmentType, setAssignmentType] = useState('exam');
    const [assignmentDate, setAssignmentDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAssignment = {
            assignmentName: assignmentName,
            assignmentType: assignmentType,
            assignmentDate: assignmentDate,
            assignmentId: +new Date().getTime(),
        };
        onAssignmentAdd(newAssignment);
    };

    const generateDate = () => {
        const date = new Date();
        const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0];
        console.log(dateString);
        setAssignmentDate(dateString);
    };

    useEffect(() => {
        generateDate();
    }, []);

    return (
        <div className="course-assignment-form">
            <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" required value={assignmentName} onChange={(e) => setAssignmentName(e.target.value)}/>
                    </div>
                    <div>
                        <label>Type:</label>
                        <select value={assignmentType} onChange={(e) => setAssignmentType(e.target.value)}>
                            <option value="exam">Exam</option>
                            <option value="test">Test</option>
                            <option value="task">Task</option>
                        </select>
                    </div>
                    <div>
                        <label>Date:</label>
                        <input type="date" value={assignmentDate} onChange={(e) => setAssignmentDate(e.target.value)}/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
        </div>
    );
}
 
export default CourseAssignmentsForm;