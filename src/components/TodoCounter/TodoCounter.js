import React from 'react';
import './TodoCounter.css'

const todoCounter = (props) => (
    <div className='todoCount'>{props.count}</div>
);

export default todoCounter
