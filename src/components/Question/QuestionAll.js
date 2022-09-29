import React from 'react';
import './QuestionAll.css'

const Question1 = () => {
    return (
        <div className='questions'>
           <div className='question'>
           <h2>Q-1: How does react work ?</h2>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
           </div>

           <div className='question'>
           <h2>Q-2: What are the differences between props and state ?</h2>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
           </div>
           
        </div>
    );
};

export default Question1;