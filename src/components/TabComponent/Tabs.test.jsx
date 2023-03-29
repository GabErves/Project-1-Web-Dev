import { describe, expect, test, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Tabs from './Tabs';

describe("Navbar rendered with the default theme and tailwind configurations", () => {

    const mockFunction = vi.fn(() => true);

    beforeEach(() => {
        render(<Tabs onClick={mockFunction}><li>Rates</li></Tabs>)
    })

    test("Tabs have children, even if they are wrapped in HTML components", () => {
        const button = screen.getByText(/Rates/i).closest('div');
        expect(button.innerHTML).toContain('li');
    })



})
