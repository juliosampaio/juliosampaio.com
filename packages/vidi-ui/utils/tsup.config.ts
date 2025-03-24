import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entryPoints: ['src/**/*'],
  format: ['cjs', 'esm'],
  dts: true,
  external: ['clsx', 'tailwind-merge'],
  outDir: 'dist',
  clean: true,
  treeshake: true,
  ...options,
}));
