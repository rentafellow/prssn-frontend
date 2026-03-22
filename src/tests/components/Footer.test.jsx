import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Footer from '../../../app/components/layout/Footer.jsx';

// Mock useAuth
vi.mock('../../../app/context/AuthContext.jsx', () => ({
  useAuth: vi.fn(() => ({ userData: null })),
}));

describe('Footer Component', () => {
  it('renders the branding and description', () => {
    render(<Footer />);
    
    expect(screen.getByText('Presence without pressure.')).toBeInTheDocument();
    expect(screen.getByText(/We're building a world where no one has to be alone/)).toBeInTheDocument();
  });

  it('renders all quick links', () => {
    render(<Footer />);
    
    const links = ['Find a Companion', 'The Handshake', 'About Us', 'Contact Us'];
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders support links', () => {
    render(<Footer />);
    
    const supportLinks = ['Terms of Service', 'Privacy Policy', 'Code of Conduct', 'Safety Center'];
    supportLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders the copyright notice', () => {
    render(<Footer />);
    
    expect(screen.getByText(/© [0-9]{4} prsnn\./)).toBeInTheDocument();
  });
});
