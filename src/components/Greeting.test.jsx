import { test, expect } from 'vitest'; // or 'jest'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from './Greeting';

// test(renders greeting with provided name) callback
test('renders greeting with provided name', () => {
  render(<Greeting name="Test User" />);
  expect(screen.getByText('Hello Hi, Test User!')).toBeInTheDocument();
});

test('renders greeting with default name if no name is provided', () => {
  render(<Greeting />);
  expect(screen.getByText('Hello, Guest!')).toBeInTheDocument();
});