import { defineConfig } from 'vite'
import { globSync } from 'glob'

const cssFiles = globSync('src/**/*.css')

export default defineConfig({
    build: {
        rollupOptions: {
            input: cssFiles.reduce(
                (prev, file) => {
                    prev[file.slice(4, -4)] = file

                    return prev
                },
                {} as Record<string, string>,
            ),
            output: {
                assetFileNames: '[name].[ext]',
            },
        },
    },
})
