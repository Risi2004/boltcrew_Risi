import React from 'react';
import './SolutionboxT2.css';


const SolutionboxT2 = (props) => {
  return (
     <div className="solutionbox-t2">
      <hr/>
      <div className='box'>
        
        <div className='description'>
            <h3>{props.solution}</h3>
            <p>{props.description}</p>
        </div>
        <img src={props.image} alt="S-img" />

      </div>
    </div>
  );
};

export default SolutionboxT2;