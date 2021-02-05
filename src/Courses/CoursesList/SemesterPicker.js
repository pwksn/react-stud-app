const SemesterPicker = ({ activeSem, setActiveSem }) => {

    return (
        <div className="semester-picker">
            <button className={`${activeSem === 'sem-1' ? "sem-active" : ""}`} value="sem-1" onClick={() => setActiveSem('sem-1')}>Sem 1</button>
            <button className={`${activeSem === 'sem-2' ? "sem-active" : ""}`} value="sem-2" onClick={() => setActiveSem('sem-2')}>Sem 2</button>
            <button className={`${activeSem === 'sem-3' ? "sem-active" : ""}`} value="sem-3" onClick={() => setActiveSem('sem-3')}>Sem 3</button>
            <button className={`${activeSem === 'sem-all' ? "sem-active" : ""}`} value="sem-all" onClick={() => setActiveSem('sem-all')}>All</button>
        </div>
    );
}
 
export default SemesterPicker;