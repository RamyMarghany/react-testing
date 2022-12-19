import {fireEvent,render, screen} from "@testing-library/react";
import {CounterTwo} from "./CounterTwo";

describe("Render Counter Two",()=>{
    test("Render the initial count",()=>{
        render(<CounterTwo count={0}/>);
        const heading = screen.getByText('Counter Two');
        expect(heading).toBeInTheDocument();
    });
    
    test("Execuste Increment fun", ()=>{
        const incrementFun = jest.fn();
        render(<CounterTwo count={0} increment={incrementFun}/>);
        const incrementButton = screen.getByRole('button', {name:"Increment"});
        fireEvent.click(incrementButton);
        expect(incrementFun).toBeCalled();
    })

    test("Execute decrement fuc",()=>{
        const decrmentFun = jest.fn();
        render(<CounterTwo count={0} decrement={decrmentFun}/>);
        const decrementButton = screen.getByRole('button', {name:"Decrement"});
        fireEvent.click(decrementButton);
        expect(decrmentFun).toHaveBeenCalledTimes(1);
    })
})