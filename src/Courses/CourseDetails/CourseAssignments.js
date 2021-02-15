const CourseAssignments = ({ currentCourse }) => {

    const getClassName = (assignmentType) => {
        if (assignmentType === 'Exam') {
            return 'course-assignment-type course-assignment-type-exam';
        } else if (assignmentType === 'Test') {
            return 'course-assignment-type course-assignment-type-test';
        } else if (assignmentType === 'Task') {
            return 'course-assignment-type course-assignment-type-task';
        } else {
            return null;
        }
    }

    return (
        <div className="course-assignments-box">
            <h2 className="header-1">Assignments</h2>
            <div className="course-assignments-list">
                {currentCourse.assignments.map((assignment) => (
                    <div className="course-assignment d-flex" key={assignment.assignmentId}>
                        <div className="course-assignment-info">
                            <h3>{assignment.assignmentName}</h3>
                            <h4>{assignment.assignmentDate}</h4>
                        </div>
                        <div className={getClassName(assignment.assignmentType)}>
                            <h3>{assignment.assignmentType}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default CourseAssignments;