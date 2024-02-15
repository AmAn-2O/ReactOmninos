import React from 'react'

function Task() {
  return (
    <div>
      <h1 style={{color: "red" ,fontSize:"45px",top:"50%",left:"50%", position:"absolute"}}>Namaste HTML/CSS</h1>
    </div>
  )
}

function Task1() {
    return (
      <div>
        <h2 style={{color:"green", fontSize:"40px",}}>Namaste JAVASCRIPT</h2>
      </div>
    )
  }

  function Task2() {
    return (
      <div>
        <h3 style={{color:"blue", fontSize:"35px",}}>Namaste REACT.js</h3>
      </div>
    )
  }

  function Task3() {
    return (
      <div>
        <h4 style={{color:"royalblue", fontSize:"30px",}}>Namaste NODE.js</h4>
      </div>
    )
  }

  function Task4() {
    return (
      <div>
        <h5 style={{color:"grey", fontSize:"25px",}}>Namaste EXPRESS.js</h5>
      </div>
    )
  }

  function Task5() {
    return (
      <div>
        <h6 style={{color:"black", fontSize:"20px",}}>Namaste MONGODB.js</h6>
      </div>
    )
  }

export {Task,Task1,Task2,Task3,Task4,Task5};
