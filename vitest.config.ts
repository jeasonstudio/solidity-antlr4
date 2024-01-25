import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // reporters: ['default', 'html'],
    coverage: {
      include: ['src/**/*.ts'],
      exclude: ['node_modules', 'dist', '.idea', '.git', '.cache', 'src/antlr4', 'docs'],
    },
  },
});
