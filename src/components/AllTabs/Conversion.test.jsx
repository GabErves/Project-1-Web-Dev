import { describe, expect, test, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Conversion from './Conversion';

describe('Table renders the rates', () => {
	beforeEach(() => {
		render(<Conversion></Conversion>);
	});

	const conversionTable = screen.findByRole('table');

	test('Table headers render correctly', () => {
		const headers = ['Currency', 'Bitcoin'];
		const tableHeaders = conversionTable.querySelector('thead > tr');
		headers.forEach((header, i) => {
			expect(tableHeaders.querySelectorAll('th')[i]).toHaveTextContent(header);
		});
	});

	// test("Table rows render correctly",()=>{
	//     const rows = conversionTable.querySelectorAll('tbody > tr');

	// })
});
