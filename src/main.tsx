
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Apply the theme immediately on page load
const applyStoredTheme = () => {
  const storedTheme = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply dark mode if explicitly set to true or if system prefers dark and no preference is stored
  if (storedTheme === 'true' || (storedTheme === null && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Apply theme before rendering
applyStoredTheme();

// Force a new build on Vercel - Update timestamp with more precision
console.log('Current pathname:', window.location.pathname);
console.log('React Router initializing...');
console.log('Build timestamp:', new Date().toISOString());
console.log('Build ID:', `build-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`);

createRoot(document.getElementById("root")!).render(<App />);
