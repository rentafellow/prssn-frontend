import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Footer from '../../../app/components/layout/Footer.jsx';

vi.mock('../../../app/context/AuthContext.jsx', () => ({
  useAuth: vi.fn(() => ({ userData: null })),
}));

describe('Footer Component', () => {
  it('renders the branding and description', () => {
    render(<Footer />);
    
    expect(screen.getAllByText(/prsnn/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Verified companionship/i)).toBeInTheDocument();
  });

  it('renders explore links', () => {
    render(<Footer />);

    const links = ['Find Companion', 'Become Companion', 'How it Works', 'Safety', 'FAQ'];
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });

    // 'Contact' intentionally uses getAllByText: it appears in both the
    // Navigate and Legal columns.
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('renders legal links', () => {
    render(<Footer />);
    
    const supportLinks = ['Terms', 'Privacy', 'Code of Conduct'];
    supportLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders the copyright notice', () => {
    render(<Footer />);
    
    expect(screen.getByText(/© [0-9]{4} prsnn\./)).toBeInTheDocument();
  });
});
