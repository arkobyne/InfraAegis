// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders InfraAegis title', () => {
    render(<App />);
    const titleElement = screen.getByText(/InfraAegis/i);
    expect(titleElement).toBeInTheDocument();
});
