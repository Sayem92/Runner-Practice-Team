import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css'

const Home = () => {
    const [runners, setRunners] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setRunners(data))

    } , [])
    
            console.log(runners)
    return (
        <div className='home'>
            <div className='home-left'>            
                <h1>Cart container</h1>
            </div>
            <div className='home-right'>
                <h1>List container</h1>
            </div>
        </div>
    );
};

export default Home;