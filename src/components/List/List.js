import React from 'react';
import './List.css'
import logo from './../../image/eid_pic-removebg-preview.png'

const List = (props) => {
    const{times} = props
    // console.log(times)
    let second = 0
    for(const seconds of times){
            second = second + seconds
    }

    return (
        <div className='list'>
            <div className='name'>
                <img src={logo} alt="" />
               <div>
                    <h3>Md. Sayem Miah</h3>
                    <p>Moulvibazar,Sylhet</p>
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
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
            </div>
            <h3>Exercise Details</h3>
            <div className='exercise-time'>
                <h4>Exercise time </h4>
            </div>
            <div className='break-time'>
                <h4>Break time: {second} second </h4>
            </div>
            <button className='btn-complete'>Activity Completed</button>
        </div>
    );
};

export default List;