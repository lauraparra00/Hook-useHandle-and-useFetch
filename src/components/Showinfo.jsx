import React from "react";
import useHandle from "../hooks/useHandle";

const ShowInfo = () => {

    const {active, handleToggle} = useHandle(false);

    return (
        <div className= "ShowInfo">

            <h1>Ocultando datos con custom hooks</h1>
            <button onClick={handleToggle}>Show/Hide</button>
            {
                active && (
   
        <div>
            <h2>User Info</h2>
            <p>Esta es la información del usuario</p>
        </div>
                )
            }
        </div>
           
    )

}

export default ShowInfo;