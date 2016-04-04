import React from 'react';

const Controls = ({ onIncreaseClick, onDecrementClick }) => (
    <div className='controls'>
        <button id='inc' onClick={onIncreaseClick}>increase</button>
        <button id='dec' onClick={onDecrementClick}>decrease</button>
    </div>
);

export default Controls;
