import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

export const alias = {
  '@app/landing-page': path.resolve(__dirname, 'pages/landing-page/src'),
  '@app/about-page': path.resolve(__dirname, 'pages/about-page/src'),
  '@app/shared': path.resolve(__dirname, 'shared/src'),
};

/**
 * Configuration for building your library.
 * See: https://vitejs.dev/guide/build.html#library-mode
 * @param {Object} config The configuration object.
 * @returns {Object} The configuration object.
 */
export function getSharedConfig(config) {
  const plugins = [react()];

  const build = {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.js',
      name: config?.build?.lib?.name,
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forgot to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  };

  const test = {
    globals: true,
    cache: {
      dir: path.resolve(__dirname, 'node_modules/.vitest'),
    },
    coverage: {
      reporter: ['text-summary', 'lcov'],
      reportsDirectory: './.coverage',
    },
    environment: 'jsdom',
    include: ['test/**/*.spec.{js,jsx}'],
  };

  return defineConfig({
    plugins,
    resolve: { alias },
    ...(config?.build ? { build } : {}),
    test,
  });
}
