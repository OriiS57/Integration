import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header.js';
import { render, screen } from '@testing-library/react';
import {Router} from "react-router-dom";

it('Header text', () => {
    render(<Header/>);
    const headingElement = screen.getByText(/TodoList/i);
    expect(headingElement).toBeInTheDocument();
});
