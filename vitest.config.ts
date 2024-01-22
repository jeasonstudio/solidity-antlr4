import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // reporters: ['json', 'text', 'text-summary', 'html', 'cobertura'],
    // reporters: ['basic', 'html', 'json'],
    include: ['**/*.(test|spec).(t|j)s'],
  },
});
