import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import Home from '../Home'

describe('HomePage', () => {
  it('render component', () => {
    render(<Home />);

    // Verify if image exist at document
    const image = screen.getByAltText('brand');
    expect(image).toBeTruthy();

    // Verify if input and button exist at document
    const input = screen.getByRole('textbox');
    const button = screen.getByText('Buscar');
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('going to results page when button is clicked', () => {
    render(<Home />);

    const input = screen.getByRole('textbox');
    const button = screen.getByText('Buscar');

    // Simulate text entry in the search field
    fireEvent.change(input, { target: { value: 'fish' } });

    // Simulates clicking the search button
    fireEvent.click(button);
  });
});
