import { render, screen } from '@testing-library/react';
import Hero from '../src/components/Hero';

describe('Hero component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { name: /L'IA au service de vos bureaux d'études/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders two CTA links', () => {
    render(<Hero />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '#cta');
    expect(links[1]).toHaveAttribute('href', '#features');
  });
});