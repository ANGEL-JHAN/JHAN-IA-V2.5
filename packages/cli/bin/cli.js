#!/usr/bin/env node

// Mostrar tu branding antes de iniciar la CLI
console.log('🔥 Bienvenido a ANGEL OFC DEV CLI');
console.log('🤖 Crea bots WhatsApp personalizados en minutos');
console.log('--------------------------------------------------');

// Ejecutar la CLI real
const index = require('../lib/cli/bundle.cli.cjs');
index.startInteractive();