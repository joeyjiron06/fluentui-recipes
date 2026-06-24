// Captures build-time info (the git commit SHA) so the published CLI can build
// raw.githubusercontent.com URLs that pin to the exact source it was built from.
// Run before `vite build` (see package.json `build:cli`). See ADR 0003.
import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const sha = execSync('git rev-parse HEAD').toString().trim();

writeFileSync('build.json', JSON.stringify({ gitSha: sha }, null, 2) + '\n');

console.log(`Wrote build.json (gitSha: ${sha})`);
