import { defineBuildConfig, MkdistBuildEntry } from 'unbuild';

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/',
      format: 'esm',
      ext: 'mjs',
    },
  ],
  declaration: true,
  failOnWarn: false,
});
