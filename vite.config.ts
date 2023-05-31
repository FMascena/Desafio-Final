import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Aqui você pode definir manualmente como dividir seus "chunks"
        }
      }
    },
    chunkSizeWarningLimit: 1500 // Ajuste esse valor conforme necessário
  }
})
