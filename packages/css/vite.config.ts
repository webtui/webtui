import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // If you'd like to bundle, specify entry points or skip
    cssCodeSplit: true, // Each CSS should remain separate
    rollupOptions: {
      input: {
        index: 'src/index.css',
        button: 'src/components/button.css',
        card: 'src/components/card.css',
      },
      output: {
        assetFileNames: '[name].[ext]',
      }
    },
  },
});
