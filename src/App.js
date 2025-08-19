import React from "react";

export default function App() {
    let arr = [1, 2, 2, 3];


    return (
        <div>
            {arr.map((singleElement)=>{
                return<div>{ singleElement*2 }</div>


            }
            )}
        </div>
    );
}
