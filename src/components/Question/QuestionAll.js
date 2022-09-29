import React from 'react';
import './QuestionAll.css'

const Question1 = () => {
    return (
        <div className='questions'>
           <div className='question'>
           <h2>Q-1: How does react work ?</h2>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
           </div>
           
        </div>
    );
};

export default Question1;