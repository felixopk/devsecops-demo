import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/game/',   // 👈 This fixes the blank page
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
