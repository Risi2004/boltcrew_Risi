import React from 'react';
import './SolutionboxT1.css';

const SolutionboxT1 = (props) => {
  return (
    <div className="solutionbox-t1">
      <hr/>
      <div className='box'>
        <img src={props.image} alt="S-img" />
        <div className='description'>
            <h3>{props.solution}</h3>
            <p>{props.description}</p>
        </div>

      </div>
    </div>
  );
};

export default SolutionboxT1;