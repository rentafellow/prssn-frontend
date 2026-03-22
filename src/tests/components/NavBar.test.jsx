import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NavBar from '../../../app/components/layout/NavBar.jsx';
vi.mock('../../../app/context/AuthContext.jsx', () => ({
  useAuth: vi.fn(),
}));

import { useAuth } from '../../../app/context/AuthContext.jsx';

describe('NavBar Component', () => {
  it('renders correctly', () => {
    useAuth.mockReturnValue({ token: null, userData: null });
    
    render(<NavBar />);
    
    expect(screen.getAllByText('prsnn.')[0]).toBeInTheDocument();
  });

  it('shows Login and Sign Up when not authenticated', () => {
    useAuth.mockReturnValue({ token: null, userData: null });
    
    render(<NavBar />);
    
    expect(screen.getAllByText('Be a Presence').length).toBeGreaterThan(0);
  });

  it('shows profile info when authenticated', () => {
    useAuth.mockReturnValue({ 
      token: 'fake-token', 
      userData: { 
        username: 'TestUser', 
        email: 'test@example.com',
        role: 'user'
      } 
    });
    
    render(<NavBar />);
    
    expect(screen.getByText(/TestUser/i)).toBeInTheDocument(); 
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });
});
