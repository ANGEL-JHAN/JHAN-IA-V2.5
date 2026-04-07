#!/usr/bin/env node

// Mostrar branding propio antes de iniciar la CLI
console.log('🔥 Bienvenido a tu CLI ANGEL OFC DEV');
console.log('🤖 Crea bots WhatsApp en minutos con tu marca propia!');
console.log('--------------------------------------------------');

// Llamar a la CLI real
const index = require('../lib/cli/bundle.cli.cjs');
index.startInteractive();