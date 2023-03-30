import React from 'react';
import {  test } from 'vitest';
import { render} from '@testing-library/react';
import Conversion from './Conversion';

test('Table renders', async () => {

    render(<Conversion></Conversion>);
    
    
    // beforeEach(() => {
    //     render(<Conversion />);
    // });

    // test("Table headers render correctly", async () => {
    //     const headers = ['Currency', 'Bitcoin'];
    //     const conversionTable = await screen.findByRole('table');
    //     const tableHeaders = conversionTable.querySelector('thead > tr');
    //     headers.forEach((header, i)=>{
    //         expect(tableHeaders.querySelectorAll('th')[i]).toHaveTextContent(header);
    //     });
    // });

    // test("Table rows render correctly",()=>{
    //     const rows = conversionTable.querySelectorAll('tbody > tr');


    // })

});

// test("Table renders headers correctly", ()=>{
//     render(<Conversion></Conversion>);
//     const tdElements = screen.queryAllByText(`Conversions`);
//     assert.strictEqual(tdElements.length, 0);

// })
