#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('Installing dependencies with npm...');

try {
  execSync('npm install', { 
    stdio: 'inherit',
    cwd: process.cwd().replace('/scripts', '')
  });
  console.log('Dependencies installed successfully!');
} catch (error) {
  console.error('Error installing dependencies:', error.message);
  process.exit(1);
}
