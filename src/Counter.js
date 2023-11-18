import React from "react";
import { useState } from "react";

function Counter (){
    const [counter, setCounter] = useState(0)
    
    const handleIncrement = () => (setCounter(counter + 1));
    const handleDecrement = () => (setCounter(counter - 1));

    return (
        <div style={{display:'flex', flexDirection: 'column' , justifyContent: 'center', alignItems: 'center', alignContent: 'space-around'}}>  
        <div className="container">
            <button className="minusButton" onClick={handleDecrement} >-</button>
            <button className="plusButton" onClick={handleIncrement} >+</button>
        </div>
        <div>
            <div className="count">{counter}</div>
        </div>
        </div>
    )
}
export default Counter;