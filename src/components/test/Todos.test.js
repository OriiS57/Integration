import React from 'react';
import ReactDOM from 'react-dom';
import Todos from '../Todos';
import { render, screen, fireEvent } from '@testing-library/react';

test('renders without crashing', () => {
    render(<Todos />);
    const inputElement = screen.getByPlaceholderText(/Add Todo/i);
    const btnElement = screen.getByRole("button", {name: /Submit/i});
    fireEvent.change(inputElement, {target: {value: "Acheter du beurre"}});
    fireEvent.click(btnElement);
    const pElement = screen.getByText(/Acheter du beurre/i);
    expect(pElement).toBeInTheDocument()
});
