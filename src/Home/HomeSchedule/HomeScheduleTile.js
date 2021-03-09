const HomeScheduleTile = ({ course, type }) => {
    return (
        <div>
            <div className="home-schedule-day-tile-header">
                <div style={{backgroundColor: course.color}}></div>
                <h3>{course.name}</h3>
            </div>
            {type === 'lecture' && <div className="d-flex">
                <h2>Lecture</h2>
                <h2>{course.lecture.lectureHour}</h2>
            </div>}
            {type === 'lab' && <div className="d-flex">
                <h2>Lab</h2>            
                <h2>{course.lab.labHour}</h2>
            </div>}
        </div>
    );
}
 
export default HomeScheduleTile;