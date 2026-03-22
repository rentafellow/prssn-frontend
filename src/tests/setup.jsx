import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
      back: vi.fn(),
    };
  },
  usePathname() {
    return '';
  },
}));

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
}));
