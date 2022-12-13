import{logRoles, render,screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import {Counter} from "./Counter";

describe('Counter',()=>{
    test('renders correctly',()=>{
        render(<Counter/>);
        const countHeading = screen.getByRole('heading', {level:1});
        expect(countHeading).toBeInTheDocument();
        const countButton = screen.getByRole('button',{name:'Increment'});
        expect(countButton).toBeInTheDocument();
    });

    test('render the default state value',()=>{
        const view = render(<Counter/>);
        logRoles(view.container);
        const countValue = screen.getByRole('heading');
        expect(countValue).toHaveTextContent('0')
    });

     test('render a count of 1 after clicking on Increment button',async()=>{
        user.setup();
        render(<Counter/>);
        const countButton = screen.getByRole('button',{name:'Increment'});
        await user.click(countButton);
        const countValue = screen.getByRole('heading');
        expect(countValue).toHaveTextContent('1')
    });

    test('Renders acount of 10 after clicking on set Button',async()=>{
        user.setup();
        render(<Counter/>);
        const counterInput =screen.getByRole('spinbutton');
        await user.type(counterInput,'10'); // to assume that you set a 10 as value for the input[type="number"];
        expect(counterInput).toHaveValue(10);
        const setButton= screen.getByRole('button',{name:'Set'});
        await user.click(setButton);
        const countValue = screen.getByRole('heading');
        expect(countValue).toHaveTextContent('10')
    });

    test("Elements are focused in correct order", async()=>{
        user.setup();
        render(<Counter/>);
        const counterInput =screen.getByRole('spinbutton');
        const setButton= screen.getByRole('button',{name:'Set'});
        const IncrementButton= screen.getByRole('button',{name:'Increment'});
        await user.tab(); // to assume that you click on tab button
        expect(IncrementButton).toHaveFocus();
        await user.tab();
        expect(counterInput).toHaveFocus(); 
        await user.tab();
        expect(setButton).toHaveFocus();
    })
})