import React, { useState } from 'react';
import './Calculator.css'

const Calculator = (props) => {
    const { summary } = props;
    let totalTime = 0;
    const storedLocalCooking = localStorage.getItem('cooking-time');
    for (const food of summary) {
        totalTime = totalTime + food.time;
        localStorage.setItem('cooking-time', JSON.stringify(totalTime))
    }
    if (storedLocalCooking) {
        totalTime = parseFloat(JSON.parse(storedLocalCooking));
    }
    const [breakTime, setBreakData] = useState(0);
    const breakBtn = (btnData) => {
        setBreakData(btnData);
    }

    return (
        <div>
            <div className="name">
                <p><b>Farhan aziz</b> <br /> Chittagong Bangladesh</p>
            </div>
            <div className="body">
                <div>
                    <h2>75kg</h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>6.5"</h2>
                    <p>height</p>
                </div>
                <div>
                    <h2>25yrs</h2>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <h2>Take a break</h2>
                <div className="buttons">
                    <button onClick={() => breakBtn(10)}>10m</button>
                    <button onClick={() => breakBtn(20)}>20m</button>
                    <button onClick={() => breakBtn(30)}>30m</button>
                    <button onClick={() => breakBtn(40)}>40m</button>
                    <button onClick={() => breakBtn(50)}>50m</button>
                </div>
            </div>
            <div>
                <h4>Cooking time : {totalTime} minutes</h4>
                <h4>Break time : {breakTime} minutes</h4>
            </div>
            <button className='end-btn'>Activity Completed</button>
        </div>
    );
};


export default Calculator;