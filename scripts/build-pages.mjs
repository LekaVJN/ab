import { cp, mkdir, rm, writeFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outDir = path.join(projectRoot, 'out');
const docsDir = path.join(projectRoot, 'docs');

function run(command, args, env) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: projectRoot,
      env,
      stdio: 'inherit',
      shell: false,
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(' ')} exited with code ${code ?? 'unknown'}`));
    });

    child.on('error', reject);
  });
}

async function exists(targetPath) {
  try {
    await access(targetPath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const env = {
    ...process.env,
    GITHUB_PAGES: 'true',
    NEXT_TELEMETRY_DISABLED: '1',
  };

  const buildCommand = process.platform === 'win32' ? 'cmd.exe' : 'npm';
  const buildArgs =
    process.platform === 'win32' ? ['/d', '/s', '/c', 'npm.cmd run build'] : ['run', 'build'];

  if (await exists(outDir)) {
    await rm(outDir, { recursive: true, force: true });
  }

  await run(buildCommand, buildArgs, env);

  if (!(await exists(outDir))) {
    throw new Error(`Static export folder was not created: ${outDir}`);
  }

  await rm(docsDir, { recursive: true, force: true });
  await mkdir(docsDir, { recursive: true });
  await cp(outDir, docsDir, { recursive: true });
  await writeFile(path.join(docsDir, '.nojekyll'), '');

  const docs404 = path.join(docsDir, '404.html');
  const docsIndex = path.join(docsDir, 'index.html');

  if (!(await exists(docs404)) && (await exists(docsIndex))) {
    await cp(docsIndex, docs404);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
