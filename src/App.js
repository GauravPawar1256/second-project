import React from "react";

export default function App() {
    let arr = [1, 2, 2, 3];


    return (
        <div>
            {arr.map((singleElement)=>{
             if(singleElement%2==0){
                return<div> <strong>{singleElement*2}</strong></div>
                }
                else{
                    return<div> <i>{singleElement*2}</i></div>
                }


            }
            )}
        </div>
    );
}
