import React from "react";

export default function App() {
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arr = [2, 3, 4, 6,12,84];
    let result;
    return (
        <div>
            {arr.map((singleElement) => {
               return <div>{a.map((grv) => {
                    result = singleElement * grv;
                    return (
                        <span>{result+","}</span>
                );
                })}
                </div>

            })
            }
        </div>
    );
}
