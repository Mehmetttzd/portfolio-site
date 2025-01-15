import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Set the base to '/' for Vercel deployments
  plugins: [react()],
});
