import '../css/slider.css';
import React from "react";

function Slider({jobLength, setJobLength}) {

    return (
        <div>
          <div className="slider-component">
          <h1>Step 1: Use the slider to estimate how long the job will take.</h1>
          <div className='slider-div'>
                <p id="rangeValue"> {jobLength} HR/s</p>
                <input type="range" min="1" max="5" className="slider" id="jobLength" onChange={(e) => setJobLength(Number(e.target.value))} value={jobLength}></input>
          </div>
      </div>
      </div>
    );
  }
  
  export default Slider;