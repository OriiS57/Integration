import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header.js';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Router} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";


const LinkHeader = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}

it('Header text', () => {
    render(<LinkHeader/>);
    const headingElement = screen.getByText(/TodoList/i);
    expect(headingElement).toBeInTheDocument();
});
