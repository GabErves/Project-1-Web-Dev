import { describe, expect, test, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Rates from './Rates';

describe("Dropdown rendered with the default theme and tailwind configurations", () => {

    const mockFunction = vi.fn(()=>true);

    beforeEach(()=>{
        render(<Rates><select className="select select-primary w-full max-w-xs" name="currency" id="currency" onChange={mockFunction}><option disabled selected>Currency</option> {Object.keys(rates).map((current)=>{
            return <option value={current}>{current}</option>
    
           
    
            })}
    </select></Rates>)

    })

    test("Dropdown contains contents from the api", () => {
        const select = screen.getByText(/Currency/i).closest('select');
        expect(select.innerHTML).toContain('option');
    })

    test("select contains the class of Select", () => {
        const select = screen.getByText(/Currency/i).closest('select');
        expect(select.classList.contains('select')).toBeTruthy();
    })

    test("Clicking the select button should cause the currency to change to the selected value", () => {
        const select = screen.getByText(/Currency/i).closest('select');
        fireEvent.click(select);
        expect(mockFunction).toHaveBeenCalledTimes(1);

    })
   


})