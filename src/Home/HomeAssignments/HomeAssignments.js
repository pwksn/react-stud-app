import { useEffect, useState } from "react";
import HomeAssignmentTile from "./HomeAssignmentTile";

const HomeAssignments = ({ courses }) => {

    const [allAssignments, setAllAssignments] = useState([]);

    useEffect(() => {
        getAllAssignments();
    }, [courses]);

    const getAllAssignments = () => {
        const assignments = [];
        const today = new Date();

        courses?.map(course => (
            course.assignments?.map(assignment => (
                assignment.assignmentCourse = course.name,
                assignments.push(assignment)
            ))
        ));

        if (assignments.length) {
            const assignmentsFiltered = assignments.filter(assignment => {
                const adiff = Date.parse(assignment.assignmentDate) - today.getTime();
                return adiff > 0;
            });
            setAllAssignments(assignmentsFiltered);
        }
    }

    return (
        <div className="home-assignments-box">
            <h2 className="header-1">Assignments</h2>
            <div className="home-assignments-list">
                {courses && 
                allAssignments
                    .sort((a, b) => {
                    return new Date(a.assignmentDate).getTime() - new Date(b.assignmentDate).getTime();
                    })
                    .map(assignment => (
                        <HomeAssignmentTile assignment={assignment} key={assignment.assignmentId}/>
                    )
                )}
            </div>
        </div>
    );
}
 
export default HomeAssignments;