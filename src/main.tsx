
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Always apply dark mode
document.documentElement.classList.add('dark');

// Debug information for router issues
console.log('Current pathname:', window.location.pathname);
console.log('React Router initializing...');
console.log('Build timestamp:', new Date().toISOString());
console.log('Build environment:', import.meta.env.MODE);
console.log('Base URL:', import.meta.env.BASE_URL);

// Generate a unique build ID for each deployment
const buildId = `build-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
console.log('Build ID:', buildId);

createRoot(document.getElementById("root")!).render(<App />);
