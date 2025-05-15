
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Always apply dark mode
document.documentElement.classList.add('dark');

// Force a new build on Vercel - Update timestamp with more precision
console.log('Current pathname:', window.location.pathname);
console.log('React Router initializing...');
console.log('Build timestamp:', new Date().toISOString());
console.log('Build ID:', `build-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`);

createRoot(document.getElementById("root")!).render(<App />);
