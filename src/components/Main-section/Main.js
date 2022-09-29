import React, { useEffect, useState } from 'react';
import Calculator from '../calculator/Calculator';
import Food from '../Food/Food';
import './Main.css'
const Main = () => {
    const [foods, setFoods] = useState([]);
    const [summary, setSummary] = useState([])

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handleAddToList = (food) => {
        const newSummary = [...summary, food];
        setSummary(newSummary);
    }
    return (
        <div className='main-grid'>
            <div className="food-container">
                {
                    foods.map(food => <Food key={food.id} food={food} handleAddToList={handleAddToList}></Food>)
                }
            </div>
            <div className="food-calculator">
                <Calculator summary={summary}></Calculator>
            </div>
        </div>
    );
};

export default Main;