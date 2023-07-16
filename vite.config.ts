import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                app: './index.html',
                'service-worker': './service-worker.js',
            },
            output: {
                entryFileNames: (assetInfo) => {
                    return assetInfo.name === 'service-worker'
                        ? '[name].js' // put service worker in root
                        : 'assets/js/[name]-[hash].js'; // others in `assets/js/`
                },
            },
        },
    },
});
