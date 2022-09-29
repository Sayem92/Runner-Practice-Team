import React from 'react';
import './List.css'
import logo from './../../image/eid_pic-removebg-preview.png'
import { useState } from 'react';
import { addToLocalStorage, getToLocalStorage } from '../Storage/Storage';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const List = (props) => {
   const [btnTime, setBtnTime] = useState([])
    const{times} = props;

    // console.log(times)
    let second = 0
    for(const seconds of times){
            second = second + seconds
    }

    const selectToBreakTime = (breakTime) =>{
            // setBtnTime(breakTime)
            addToLocalStorage(breakTime)
           const preBreakTime =  getToLocalStorage()
           setBtnTime(preBreakTime)
    }


    useEffect(()=>{

        const preBreakTime =  getToLocalStorage()
           setBtnTime(preBreakTime)

    }, [btnTime]);

    const notify = () => toast("Congregation! done with your activity.");

   
    return (
        <div className='list'>
            <div className='name'>
                <img src={logo} alt="" />
               <div>
                    <h3>Md. Sayem Miah</h3>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <img style={{width:'24px',height:'24px',marginRight:'8px'}} src="location.png" alt="" />
                        <p>Moulvibazar,Sylhet</p>
                    </div>
               </div>
            </div>
            <div className='information'>
                <div>
                        <p><strong>70</strong><small>kg</small></p>
                        <p>Weight</p>
                </div>
                <div>
                        <p><strong>6.4</strong></p>
                         <p>Height</p>
                </div>
                <div>
                        <p><strong>22</strong><small>yrs</small></p>
                        <p>Age</p>
                </div>
            </div>
            <h3>Add a break</h3>
            <div className='btn-break'>
                <button onClick={(e)=> selectToBreakTime(e.target.innerText)}>10s</button>
                <button onClick={(e)=> selectToBreakTime(e.target.innerText)}>20s</button>
                <button onClick={(e)=> selectToBreakTime(e.target.innerText)}>30s</button>
                <button onClick={(e)=> selectToBreakTime(e.target.innerText)}>40s</button>
            </div>
            <h3>Exercise Details</h3>
            <div className='exercise-time'>
                <h4>Exercise time : {second} minutes </h4>
            </div>
            <div className='break-time'>
                <h4>Break time : {btnTime ? btnTime : '0s'} </h4>
            </div>
            <button className='btn-complete' onClick={notify}>Activity Completed</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default List;