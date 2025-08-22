import React, { useState } from "react";

export default function App() {
    const [number, setNumber] = useState();
    const[showBlock,setShowBlock]= useState(false);
    // const [submittedNumber, setSubmittedNumber] = useState('');
    // const [submittedImage, setSubmittedImage] = useState('');

    function handleAgeChange(event) {
        setNumber(event.target.value);
    }
    function onSubmitClick(){
        setShowBlock(true)
    }
    
    return (
        <div>
            <input name="text" value={number} onChange={handleAgeChange} />
            
            <button onClick={onSubmitClick}>Submit</button>
            {showBlock && <div>
                <p>{number}</p>
                <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" width="300" />
            </div>}
        </div>
    );
}
