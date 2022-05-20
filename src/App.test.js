import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen } from '@testing-library/react';

test('renders without crashing', () => {
  render(<App />);
});
