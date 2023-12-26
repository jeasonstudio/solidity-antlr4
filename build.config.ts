import { defineBuildConfig, BuildEntry } from 'unbuild';

const createEntry = (format: 'esm' | 'cjs'): BuildEntry => ({
  builder: 'mkdist',
  input: './src/',
  outDir: `./dist/${format}/`,
  format,
});

export default defineBuildConfig({
  entries: [createEntry('esm'), createEntry('cjs')],
  declaration: true,
});
