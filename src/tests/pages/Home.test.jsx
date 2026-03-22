import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Home from '../../../app/page.jsx';
import axios from 'axios';

// Mock components to simplify rendering in JSDOM
vi.mock('../../../app/components/home/Hero.jsx', () => ({
  default: () => <div data-testid="hero-component">Hero</div>
}));
vi.mock('../../../app/components/home/RealityCheck.jsx', () => ({
  default: () => <div data-testid="reality-check-component">Reality Check</div>
}));
vi.mock('../../../app/components/home/HowItWorks.jsx', () => ({
  default: () => <div data-testid="how-it-works-component">How It Works</div>
}));
vi.mock('../../../app/components/home/Testimonials.jsx', () => ({
  default: () => <div data-testid="testimonials-component">Testimonials</div>
}));

// Mock AuthContext
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
    expect(screen.getByTestId('reality-check-component')).toBeInTheDocument();
    expect(screen.getByTestId('how-it-works-component')).toBeInTheDocument();
    expect(screen.getByTestId('testimonials-component')).toBeInTheDocument();
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
    
    // axios.get should be called due to the useEffect that checks profile status
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
