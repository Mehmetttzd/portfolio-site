import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-site/', // GitHub Pages expects this to match your repo name
  plugins: [react()],
})
