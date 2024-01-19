import { defineBuildConfig, MkdistBuildEntry } from 'unbuild';

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/',
      format: 'esm',
      ext: 'js',
      declaration: true,
    },
    {
      builder: 'mkdist',
      input: './src/',
      format: 'cjs',
      ext: 'cjs',
      declaration: false,
    },
  ],
  failOnWarn: false,
});
