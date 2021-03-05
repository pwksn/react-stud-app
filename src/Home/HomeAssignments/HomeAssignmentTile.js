const HomeAssignmentTile = ({ assignment }) => {

    const selectBackgroundColor = (type) => {
        if (type === "exam") { 
            return '#ee8a9e';
        } else if (type === 'test') {
            return '#ffeb80';
        } else {
            return '#97e3b6'
        }
    }

    return (
        <div 
        className="home-assignment-tile"
        style={{backgroundColor: selectBackgroundColor(assignment.assignmentType)}}>
            <div className="d-flex">
                <h4>{assignment.assignmentCourse}</h4> 
                <h4>{assignment.assignmentDate}</h4>  
            </div>
            <h3>{assignment.assignmentName}</h3>
        </div>
    );
}
 
export default HomeAssignmentTile;