import { useEffect, useState } from 'react';
import { CircleProgress } from 'react-gradient-progress';
import CourseProgressForm from './CourseProgressForm';

const calculateRemToPx = (rem) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const CourseProgress = ({ currentCourse, onCourseAssignmentsChange }) => {

    const [progressFormMode, setProgressFormMode] = useState(false);
    const [pointsEarned, setPointsEarned] = useState(0);
    const [pointsPossible, setPointsPossible] = useState(1); // to prevent 0:0 -> NaN in CircleProgress
    const pointsPercentage = +((currentCourse.pointsEarned / currentCourse.pointsPossible) * 100).toPrecision(2);
    

    useEffect(() => {
        setPointsEarned(currentCourse?.pointsEarned);
        setPointsPossible(currentCourse?.pointsPossible);
        calculateGrade();
    }, [currentCourse]);

    const onProgressModeToggle = () => {
        setPointsEarned(currentCourse?.pointsEarned);
        setPointsPossible(currentCourse?.pointsPossible);
        setProgressFormMode(!progressFormMode);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        currentCourse.pointsEarned = +pointsEarned;
        currentCourse.pointsPossible = +pointsPossible;
        onCourseAssignmentsChange(currentCourse, 'add');
        setProgressFormMode(false);
    }

    const calculateGrade = () => {
        if (pointsPercentage < 50) {
            return 2.0;
        } else if (pointsPercentage >= 50 && pointsPercentage < 60) {
            return 3.0;
        } else if (pointsPercentage >= 60 && pointsPercentage < 70) {
            return 3.5;
        } else if (pointsPercentage >= 70 && pointsPercentage < 80) {
            return 4.0;
        } else if (pointsPercentage >= 80 && pointsPercentage < 90) {
            return 4.5;
        } else if (pointsPercentage >= 90) {
            return 5.0;
        }
    }
    
    return (
        <div className="course-progress-box">
            <div className="course-progress-header d-flex">
                <h2 className="header-1">Progress</h2>
                <button onClick={onProgressModeToggle}>
                    {progressFormMode && <ion-icon name="close" style={{color: '#fff'}}></ion-icon>}
                    {!progressFormMode && <ion-icon name="pencil-outline" style={{color: '#fff'}}></ion-icon>}
                </button>
            </div>
            {!progressFormMode && currentCourse.pointsPossible && <div className="course-progress-info">
                <div className="course-progress-bar">
                    <CircleProgress 
                        percentage={pointsPercentage}
                        width={calculateRemToPx(20)}
                        strokeWidth={15}
                        fontSize={'3rem'}
                        fontColor={'#333'}
                        primaryColor={['#222C67', '#222C67']}
                        secondaryColor={'#bdc0d1'}
                    />

                    <div className="course-progress-points">
                        <h3>{currentCourse.pointsEarned}/{currentCourse.pointsPossible}</h3>
                    </div>
                </div>
                <div className="course-progress-data">
                    <div className="course-progress-grade">
                        <h2>{calculateGrade()}</h2>
                        <p>Projected grade</p>
                    </div>
                </div>
            </div>}
            {!progressFormMode && !currentCourse.pointsPossible && <div className="course-progress-empty">
                <h2>No progress yet</h2>
            </div>}
            {/* {progressFormMode && <div className="course-progress-form-box">
                <form className="course-progress-form" onSubmit={handleSubmit}>
                    <div className="d-flex">
                        <input type="number" value={pointsEarned} onChange={(e) => setPointsEarned(e.target.value)} style={{direction: 'rtl'}}/>
                        <p>/</p>
                        <input type="number" value={pointsPossible} onChange={(e) => setPointsPossible(e.target.value)}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>} */}
            {progressFormMode && 
            <CourseProgressForm 
                pointsEarned={pointsEarned} 
                pointsPossible={pointsPossible} 
                setPointsEarned={setPointsEarned}
                setPointsPossible={setPointsPossible}
                handleSubmit={handleSubmit}
            />}
            
        </div>
    );
}
 
export default CourseProgress;