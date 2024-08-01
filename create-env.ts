/**
 * @description This script will create some .env files in the env folder based on the .env.example file in the root project.
 */

import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import clc from 'cli-color';

const envExample = readFileSync('./env/.env.example', 'utf8');
const environments = ['local', 'testing', 'development', 'staging', 'production', 'production.local'];

for (const environment of environments) {
  if (!existsSync('./env')) mkdirSync('./env');
  try {
    await writeFile(`./env/.env.${environment}`, envExample);
    console.log(clc.green(`.env.${environment} file created successfully! ✅`));
  } catch (err) {
    console.log(clc.red('Something went wrong. ❌'));
    console.log(clc.cyan('Please contact the owner of this template! ❕'));
    process.exit(1);
  }
}
