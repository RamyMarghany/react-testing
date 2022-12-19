import {useState} from "react";

type UseCounterProps ={
    initialCounter?: number
}

export const UseCounter=({initialCounter=0}:UseCounterProps={})=>{
    const [counter,setCounter] = useState(initialCounter);
    const increment=()=>setCounter(counter+1);
    const decrement=()=>setCounter(counter-1);
    return {counter, increment,decrement}
} 