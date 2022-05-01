import React, { createContext, useState } from 'react';

export const StudArr=createContext();
const arr = [
    { name: 'John', age: 26, course: 'MERN', batch: 'October', id: "1" },
    { name: 'Doe', age: 25, course: 'MERN', batch: 'November', id: "2" },
    { name: 'Biden', age: 26, course: 'MERN', batch: 'September', id: "3" },
    { name: 'Barar', age: 22, course: 'MERN', batch: 'September', id: "4" },
    { name: 'Christ', age: 23, course: 'MERN', batch: 'October', id: "5" },
    { name: 'Elent', age: 24, course: 'MERN', batch: 'November', id: "6" },
];

export const StudContext = (props) => {

    const [student, setStudent] = useState(arr);

    return (
        <div>
            <StudArr.Provider value={[student,setStudent]}>
                {props.children}
            </StudArr.Provider>
        </div>
    )
}