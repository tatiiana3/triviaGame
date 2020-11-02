import React from 'react';
import './BarStyles.css';

const ProgressBar = ({totalQs, questionId}) => {
    let percentage = Math.round(questionId/totalQs * 100);
    return (
        <div className="progress">
        <div className="meter" style={{opacity:1, width:`${percentage}%`}}>{percentage}%</div>
      </div>
    )
}

export default ProgressBar