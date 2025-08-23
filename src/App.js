import React, { useState } from "react";

export default function App() {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [addition, setAddition] = useState();
    const [substraction, setSubstraction] = useState();
    const [multiplication, setMultiplication] = useState();
    const [division, setDivision] = useState();

    function handleNumber1Change(event) {
        setNumber1(parseInt(event.target.value))
    }
    function handleNumber2Change(event) {
        setNumber2(parseInt(event.target.value))
    }
    function onAddition() {
        setAddition(number1 + number2);
        setSubstraction(undefined);
        setMultiplication(undefined);
        setDivision(undefined);
    }
    function onSubstraction() {
        setSubstraction(number1 - number2);
        setAddition(undefined);
        setMultiplication(undefined);
        setDivision(undefined);
    }
    function onMultiplication() {
        setMultiplication(number1 * number2);
        setAddition(undefined);
        setSubstraction(undefined);
        setDivision(undefined);
    }
    function onDivision() {
        setDivision(number1 / number2);
        setAddition(undefined);
        setSubstraction(undefined);
        
        setMultiplication(undefined);

    }


    return (
        <div>
            <input name="text" value={number1} onChange={handleNumber1Change} />
            <input name="text" value={number2} onChange={handleNumber2Change} />
            <button onClick={onAddition}>Addition</button>
            <button onClick={onSubstraction}>Substraction</button>
            <button onClick={onMultiplication}>Multiplication</button>
            <button onClick={onDivision}>Division</button>
            { addition!==undefined && <h1>addition of {number1} and {number2} is:{addition}</h1>}
            {substraction!==undefined && <h1>substraction of {number1} and {number2} is:{substraction}</h1>}
            {multiplication!==undefined && <h1>multiplication of {number1} and {number2} is:{multiplication}</h1>}
            {division!==undefined && <h1>division of {number1} and {number2} is:{division}</h1> }
        </div>
    );
}
