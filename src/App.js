import React, { useState } from "react";

export default function App() {
    const [number, setnumber] = useState(0);
    function onIncrease() {
        setnumber(number +1);
    }

    return (
        <div>
            <button onClick={onIncrease}>Increase Number</button>
            <h1>{number}</h1>
        </div>
    );
}
