import React from "react";
import { useState } from "react";

const Person = () =>{

   const [person,setPerson] = useState({name:"Priyanshu",lastname:"rathore",age:21})

    const changePerson = () =>{
        setPerson({...person,age:22})
    }
    return(
        <>
            <h1>my name is {person.name} {person.lastname} and my age is {person.age}</h1>
            <button onClick={changePerson}>change</button>
        </>
    )
}

export default Person