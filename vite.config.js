import './config';

import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '#src': `${dirname}/src`,
    },
  },
  server: {
    port: Number(process.env.APP_PORT) || 3000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: './src/app.js',
      exportName: 'default',
    }),
  ],
});
