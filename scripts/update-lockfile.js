#!/usr/bin/env node

import { execSync } from 'child_process';

try {
  console.log('Updating pnpm lockfile...');
  execSync('pnpm install', { stdio: 'inherit' });
  console.log('Lockfile updated successfully');
} catch (error) {
  console.error('Error updating lockfile:', error.message);
  process.exit(1);
}
