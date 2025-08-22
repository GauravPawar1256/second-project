import React, { useState } from "react";

export default function App() {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const[addition, setAddition]= useState();
    const[substraction, setSubstraction]=useState();
    const[multiplication,setMultiplication]=useState();
    const[division,setDivision]=useState();

    function handleNumber1Change(event){
        setNumber1(parseInt(event.target.value))
    }
    function handleNumber2Change(event){
        setNumber2(parseInt(event.target.value))
    }
    function onSubmit(){
        setAddition(number1+number2);
        setSubstraction(number1-number2);
        setMultiplication(number1*number2);
        setDivision(number1/number2);
    }

    
    return (
        <div>
            <input name="text" value={number1} onChange={handleNumber1Change}/>
            <input name="text" value={number2} onChange={handleNumber2Change}/>
            <button onClick={onSubmit}>calculate</button>
            {
                addition &&<h1>addition of {number1} and {number2} is:{addition}</h1>}
             {   substraction &&<h1>substraction of {number1} and {number2} is:{substraction}</h1>}
             {   multiplication &&<h1>multiplication of {number1} and {number2} is:{multiplication}</h1>}
             {   division &&<h1>division of {number1} and {number2} is:{division}</h1>

            }
        </div>
    );
}
