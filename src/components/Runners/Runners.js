import React from 'react';
import './Runners.css'

const Runners = (props) => {
    const {runner} = props;
    const {name, img, time, age} = runner
    console.log(name,time)
    
    return (
        <div className='runners'>
           
            <img src={img} alt="" />
            <div className='info'>
                <h3>Name: {name}</h3>
                <p>For age: {age}</p>
                <p>Time required: {time}s </p>
                <button className='btn'>Add To List</button>
            </div>
        </div>
    );
};

export default Runners;