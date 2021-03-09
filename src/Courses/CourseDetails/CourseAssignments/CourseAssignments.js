import { useEffect, useState } from "react";
import CourseAssignmentsForm from "./CourseAssignmentsForm";

const CourseAssignments = ({ currentCourse, onCourseAssignmentsChange }) => {

    const [assignmentFormMode, setAssignmentFormMode] = useState(false);
    const [assignmentsSortOrderAsc, setAssignmentsSortOrderAsc] = useState(true);

    useEffect(() => {
        sortCurrentCourseAssignments();
    }, [currentCourse]);

    const onAssignmentRemoval = (id) => {
        const assignmentToRemove = currentCourse.assignments.filter(asg => asg.assignmentId === id)[0];
        onCourseAssignmentsChange(currentCourse.assignments.indexOf(assignmentToRemove), 'remove');
    }

    const onAssignmentAdd = (assignment) => {
        if(currentCourse.assignments) {
            currentCourse.assignments.push(assignment);
        } else {
            currentCourse.assignments = [];
            currentCourse.assignments.push(assignment);
        }
        onCourseAssignmentsChange(currentCourse, 'add');
        setAssignmentFormMode(false);
    }

    const onAssignmentModeToggle = () => {
        setAssignmentFormMode(!assignmentFormMode);
    }

    const sortCurrentCourseAssignments = () => {
        if (currentCourse.assignments && currentCourse.assignments.length) {
            const assignmentsSorted = [...currentCourse.assignments];
            assignmentsSorted?.sort((a, b) => {
                return new Date(a.assignmentDate).getTime() - new Date(b.assignmentDate).getTime();
            });
            return assignmentsSortOrderAsc ? assignmentsSorted : assignmentsSorted.reverse();
        }
    }

    const getClassName = (assignmentType) => {
        if (assignmentType === 'exam') {
            return 'course-assignment-type course-assignment-type-exam';
        } else if (assignmentType === 'test') {
            return 'course-assignment-type course-assignment-type-test';
        } else if (assignmentType === 'task') {
            return 'course-assignment-type course-assignment-type-task';
        } else {
            return null;
        }
    }

    return (
        <div className="course-assignments-box">
            <div className="course-assignments-header d-flex">
                <div className="d-flex">
                    <h2 className="header-1">Assignments</h2>
                    {!assignmentFormMode && currentCourse.assignments && currentCourse.assignments.length > 0 && <div className="course-assignment-counter d-flex">
                        <p>{currentCourse.assignments.length}</p>
                    </div>}
                </div>
                <div className="d-flex">
                    {!assignmentFormMode && currentCourse.assignments?.length > 1 && <button onClick={() => setAssignmentsSortOrderAsc(!assignmentsSortOrderAsc)}>
                        {assignmentsSortOrderAsc && <ion-icon name="arrow-down-outline"></ion-icon>}
                        {!assignmentsSortOrderAsc && <ion-icon name="arrow-up-outline"></ion-icon>}
                    </button>}
                    <button onClick={onAssignmentModeToggle}>
                        {assignmentFormMode && <ion-icon name="close" style={{color: '#fff'}}></ion-icon>}
                        {!assignmentFormMode && <ion-icon name="add-outline" style={{color: '#fff'}}></ion-icon>}
                    </button>
                </div>
            </div>
            {!assignmentFormMode && currentCourse.assignments && currentCourse.assignments.length > 0 && <div className="course-assignments-list">
                {sortCurrentCourseAssignments().map((assignment) => (
                    <div className="course-assignment d-flex" key={assignment.assignmentId}>
                        <div className="course-assignment-info">
                            <h3>{assignment.assignmentName}</h3>
                            <h4>{assignment.assignmentDate}</h4>
                        </div>
                        <div className={getClassName(assignment.assignmentType)}>
                            <h3>{assignment.assignmentType}</h3>
                        </div>
                        <button className="course-assignment-delete" onClick={() => onAssignmentRemoval(assignment.assignmentId)}>
                            <ion-icon name="close" style={{color: "#eee", width: '1rem', height: '1rem'}}></ion-icon>
                        </button>
                    </div>
                ))}
            </div>}

            {((!assignmentFormMode && !currentCourse.assignments) || (!assignmentFormMode && currentCourse.assignments.length === 0)) && <div className="course-assignment-placeholder-box">
                <h2 className="course-assignment-placeholder">No assignments</h2>
            </div>}
            
            {assignmentFormMode && <CourseAssignmentsForm onAssignmentAdd={onAssignmentAdd}/>}
        </div>
    );
}
 
export default CourseAssignments;