import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import List from '../List/List';
import Runners from '../Runners/Runners';
import './Home.css'
// import logo from './../../../public'


const Home = () => {
    const [runners, setRunners] = useState([]);
    const [times, setTimes] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setRunners(data))

    } , [])

            
     const addToList = (selectTime) =>{
        // console.log(selectTime)  
        let newTime= []
        if(times){
            newTime.push(...times,selectTime)
            setTimes(newTime)
        }
        else{
            setTimes(selectTime)
        }
        
     }  
    //  console.log(times)
    
    
    return (
        <div className='home'>
            <div className='home-left'> 
            <div style={{display:'flex',alignItems:'center'}}>
                    <img style={{width:'48px',height:'48px',marginRight:'8px'}} src="runner-icon.png" alt="" />           
                    <h1>Runner Practise Team</h1>
            </div>
                <h3>Select today's exercise</h3>
                <div className='home-left-runners'>
                    {
                        runners.map(runner => <Runners
                            key={runner.id} 
                            runner={runner}
                            addToList={addToList}
                            ></Runners>)
                    }
                </div>
               
            </div>
            <div className='home-right'>
              
                <List times={times}></List>
            </div>
        </div>
    );
};

export default Home;