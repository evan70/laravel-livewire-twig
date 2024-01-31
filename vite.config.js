import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import manifestSRI from 'vite-plugin-manifest-sri';
import fs from 'fs';

export default defineConfig(({mode}) => {
    const host = loadEnv(mode, process.cwd()).VITE_HOST;

    return {
        plugins: [
            laravel({
                input: [
                    'resources/css/app.css',
                    'resources/js/app.js',
                ],
                refresh: true,
            }),
            manifestSRI(),
        ],
    }
});
