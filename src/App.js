import React, { useState } from "react";

export default function App() {
    const [age, setAge] = useState();
    function handleagechange(event) {
        setAge(event.target.value)
    }

    return (
        <div>
            <input name="age" value={age} onChange={handleagechange} />
            <div>{age}</div>
        </div>
    )
}
