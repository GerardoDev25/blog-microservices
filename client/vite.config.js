import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // THIS IS THE CRITICAL LINE
    host: '0.0.0.0',
    port: 5173, // Ensure this matches your expected port

    // 2. THIS IS THE NEW CRITICAL LINE to fix the "Blocked request"
    allowedHosts: ['posts.com'],
  },
});
