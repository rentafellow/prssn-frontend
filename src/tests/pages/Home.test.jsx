import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Home from '../../../app/page.jsx';
import axios from 'axios';

vi.mock('../../../app/components/home/Hero.jsx', () => ({
  default: () => <div data-testid="hero-component">Hero</div>
}));
vi.mock('../../../app/components/home/RealMoments.jsx', () => ({
  default: () => <div data-testid="real-moments-component">Real Moments</div>
}));
vi.mock('../../../app/components/home/Modes.jsx', () => ({
  default: () => <div data-testid="modes-component">Modes</div>
}));
vi.mock('../../../app/components/home/HowItWorks.jsx', () => ({
  default: () => <div data-testid="how-it-works-component">How It Works</div>
}));
vi.mock('../../../app/components/home/WhyPrsnn.jsx', () => ({
  default: () => <div data-testid="why-prsnn-component">Why Prsnn</div>
}));
vi.mock('../../../app/components/home/Safety.jsx', () => ({
  default: () => <div data-testid="safety-component">Safety</div>
}));
vi.mock('../../../app/components/home/WhatThisIsNot.jsx', () => ({
  default: () => <div data-testid="what-this-is-not-component">What This Is Not</div>
}));
vi.mock('../../../app/components/home/Testimonials.jsx', () => ({
  default: () => <div data-testid="testimonials-component">Testimonials</div>
}));
vi.mock('../../../app/components/home/BecomeCompanion.jsx', () => ({
  default: () => <div data-testid="become-companion-component">Become Companion</div>
}));
vi.mock('../../../app/components/home/FAQ.jsx', () => ({
  default: () => <div data-testid="faq-component">FAQ</div>
}));
vi.mock('../../../app/components/home/FinalCTA.jsx', () => ({
  default: () => <div data-testid="final-cta-component">Final CTA</div>
}));

vi.mock('../../../app/context/AuthContext.jsx', () => ({
  useAuth: vi.fn(),
}));

import { useAuth } from '../../../app/context/AuthContext.jsx';
vi.mock('axios');

describe('Home Page', () => {
  const mockLogout = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    useAuth.mockReturnValue({
      token: null,
      userData: null,
      logout: mockLogout
    });
  });

  it('renders all sections correctly', () => {
    render(<Home />);

    expect(screen.getByTestId('hero-component')).toBeInTheDocument();
    expect(screen.getByTestId('real-moments-component')).toBeInTheDocument();
    expect(screen.getByTestId('modes-component')).toBeInTheDocument();
    expect(screen.getByTestId('how-it-works-component')).toBeInTheDocument();
    expect(screen.getByTestId('why-prsnn-component')).toBeInTheDocument();
    expect(screen.getByTestId('safety-component')).toBeInTheDocument();
    expect(screen.getByTestId('what-this-is-not-component')).toBeInTheDocument();
    expect(screen.getByTestId('testimonials-component')).toBeInTheDocument();
    expect(screen.getByTestId('become-companion-component')).toBeInTheDocument();
    expect(screen.getByTestId('faq-component')).toBeInTheDocument();
    expect(screen.getByTestId('final-cta-component')).toBeInTheDocument();
  });

  it('does not check profile status if no token is present', () => {
    render(<Home />);
    expect(axios.get).not.toHaveBeenCalled();
  });

  it('checks profile status if token is present', async () => {
    useAuth.mockReturnValue({
      token: 'fake-jwt-token',
      userData: { id: 1 },
      logout: mockLogout
    });

    axios.get.mockResolvedValueOnce({ status: 200, data: {} });

    render(<Home />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });

  it('calls logout if profile status check returns 401', async () => {
    useAuth.mockReturnValue({
      token: 'fake-jwt-token',
      userData: { id: 1 },
      logout: mockLogout
    });

    const errorWith401Response = new Error('Request failed with status code 401');
    errorWith401Response.response = { status: 401 };

    axios.get.mockRejectedValueOnce(errorWith401Response);

    render(<Home />);

    await waitFor(() => {
      expect(mockLogout).toHaveBeenCalledTimes(1);
    });
  });
});
