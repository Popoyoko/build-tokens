#!/usr/bin/env node

import('../lib/style-dictionary/index.js').then(module => {
    const buildTokens = module.default;
    buildTokens();
  }).catch(err => {
    console.error('Failed to load module:', err);
    process.exit(1);
  });
  