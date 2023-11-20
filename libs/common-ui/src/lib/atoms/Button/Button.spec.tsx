import {render, screen } from '@testing-library/react';
import { axe } from 'jest-axe'
import { Button } from './Button';

describe('Button Component', () => {
  it('should render correctly', async () => {
    const { debug, container } = render(<Button label="Hello" />);
    const result = await axe(container)
    // expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(result).toHaveNoViolations()
  })
});
