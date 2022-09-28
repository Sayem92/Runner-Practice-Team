import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import List from '../List/List';
import Runners from '../Runners/Runners';
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
                <h1>Runner Practise Team</h1>
                <h3>Select today's exercise</h3>
                <div className='home-left-runners'>
                    {
                        runners.map(runner => <Runners
                            key={runner.id} 
                            runner={runner}
                            ></Runners>)
                    }
                </div>
               
            </div>
            <div className='home-right'>
              
                <List></List>
            </div>
        </div>
    );
};

export default Home;