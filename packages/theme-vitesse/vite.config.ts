import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: 'src/index.css',
            output: {
                assetFileNames: '[name].[ext]',
            },
        },
    },
})
