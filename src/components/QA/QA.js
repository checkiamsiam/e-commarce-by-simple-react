import React from 'react';
import './QA.css';


const QA = () => {
  return (
    <div>
      <h1 className='blog-title'>Someone Said To Add Them &#128563;</h1>
      <div className="blog-container">
        <div className="react blog">
          <h1>How React Works?</h1>
          <p>Ans: react is a javascript library. we use component to order react and react convert the conponent in 3 perameter of a function and this build in react function use a duplicate dom and then merge it to original dom. react works in one way data binding process</p>
        </div>
        <div className="props-vs-state blog">
        <h1>Props vs state</h1>
          <p>Ans: we can sent data in one component to other by props and also we can make a semiler look component by defferent data and state is a situation that can change by users example facebook like button is a state it can change by user</p>
        </div>
        <div className="useState blog">
        <h1>How useState Works?</h1>
          <p>Ans: usestate is a hook element in react . usestate is a build in react function it return a state variable and a function that can change the state value. </p>
        </div>
      </div>
    </div>
  );
};

export default QA;