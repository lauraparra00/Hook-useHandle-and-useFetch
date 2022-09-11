import React from "react";
import useHandle from "../hooks/useHandle";

const Handle = () => {

    const {active, handleTrue, handleFalse, handleToggle} = useHandle ();

    

    
    return(
        <div className="Handle">
            <h1>Probar custom hook</h1>

            <button onClick={handleTrue}>true</button>
            <button onClick={handleFalse}>false</button>
            <button onClick={handleToggle}>toggle</button>

            <p>{active.toString()}</p>

        </div>
    )    
}

export default Handle;

