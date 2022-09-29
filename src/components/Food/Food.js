import React from 'react';
import './Food.css'

const Food = (props) => {
    const { name, picture, calories, time } = props.food;
    return (
        <div className='food'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Calories : <b>{calories}</b></p>
            <p>Cooking Time required : <b>{time} min</b></p>
            <button onClick={() => { props.handleAddToList(props.food) }}>Add To List</button>
        </div>
    );
};

export default Food;