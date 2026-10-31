#!/usr/bin/env node
/**
 * Typprüfung + Validierung für einzelne Themenblöcke.
 *   npm run check -- religionen/islam-dilemma religionen/islam-koran
 * Ohne Argumente: gesamte Wissensdatenbank.
 */
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const topics = process.argv.slice(2).map((t) => t.replace(/^src\/content\/topics\//, '').replace(/\/(index\.ts)?$/, ''));
const files = topics.map((t) => join('src/content/topics', t, 'index.ts'));
for (const f of files) if (!existsSync(join(root, f))) { console.error(`✗ ${f} existiert nicht`); process.exit(1); }

const tscArgs = files.length
  ? ['tsc', '--ignoreConfig', '--noEmit', '--strict', '--target', 'es2022', '--lib', 'es2023', '--module', 'esnext', '--moduleResolution', 'bundler',
     '--allowImportingTsExtensions', '--verbatimModuleSyntax', '--skipLibCheck', '--types', '', ...files]
  : ['tsc', '-p', 'tsconfig.content.json', '--noEmit'];
console.log('▶ Typprüfung …');
const tsc = spawnSync('npx', tscArgs, { cwd: root, stdio: 'inherit' });
if (tsc.status !== 0) { console.error('✗ Typfehler – bitte zuerst beheben.'); process.exit(1); }
console.log('✓ Typen OK\n▶ Validierung …');
const v = spawnSync('npx', ['tsx', 'scripts/validate-content.ts', ...topics.flatMap((t) => ['--only', t])], { cwd: root, stdio: 'inherit' });
process.exit(v.status ?? 1);
