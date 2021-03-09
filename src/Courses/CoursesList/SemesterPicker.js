const SemesterPicker = ({ activeSem, setActiveSem }) => {

    return (
        <div className="semester-picker">
            <button className={`${activeSem === 1 ? "picker-button-active" : ""}`} value={1} onClick={() => setActiveSem(1)}>Sem 1</button>
            <button className={`${activeSem === 2 ? "picker-button-active" : ""}`} value={2} onClick={() => setActiveSem(2)}>Sem 2</button>
            <button className={`${activeSem === 3 ? "picker-button-active" : ""}`} value={3} onClick={() => setActiveSem(3)}>Sem 3</button>
            <button className={`${activeSem === 0 ? "picker-button-active" : ""}`} value={0} onClick={() => setActiveSem(0)}>All</button>
        </div>
    );
}
 
export default SemesterPicker;