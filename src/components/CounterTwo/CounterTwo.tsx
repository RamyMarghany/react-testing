type CounterTwoProps = {
    count: number;
    increment?: ()=>void;
    decrement?: ()=>void;
}

export const CounterTwo = ({count, increment,decrement}:CounterTwoProps)=>{
    return(
        <>
            <h2>Counter Two</h2>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}