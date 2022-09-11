
import { useState } from "react";

const useHandle = () => {

    const [active, setActive]= useState(false);

    const handleTrue = () => setActive(true);
    const handleFalse = ()=> setActive(false);
    const handleToggle = () => setActive(!active);
    return {
        active, 
        handleTrue,
        handleFalse,
        handleToggle
    }

}
export default useHandle;