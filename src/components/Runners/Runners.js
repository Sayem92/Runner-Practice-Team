import React from 'react';
import './Runners.css'

const Runners = (props) => {
    const {runner} = props;
    const {name, img, time, age} = runner;
    //  console.log(props)
    
    return (
        <div className='runners'>
           
            <img src={img} alt="" />
            <div className='info'>
                <h3>Name: {name}</h3>
                <p>For age: {age}</p>
                <p>Time required: {time}min </p>
                <button
                onClick={()=>props.addToList(time)}
                className='btn'>Add To List</button>
            </div>
        </div>
    );
};

export default Runners;