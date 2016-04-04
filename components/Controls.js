
const Controls = ({ onIncreaseClick, onDecrementClick}) => {
    return (
    <div className='controls'>
        <button id='inc' onClick={onIncreaseClick}>increase</button>
        <button id='dec' onClick={onDecrementClick}>decrease</button>
    </div>
    );
};

export default Controls;
