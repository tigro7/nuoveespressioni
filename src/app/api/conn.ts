/* eslint-disable no-var */
import { Pool } from 'pg';

declare global {
  var pool: Pool | undefined;
}

// Evita di creare più connessioni in dev mode
if (!globalThis.pool) {
  globalThis.pool = new Pool({
    connectionString: process.env.AIVEN_POSTGRESQL_URL || '',
    ssl: {
        rejectUnauthorized: false,
    },
  });

  console.log('✅ Nuova connessione PostgreSQL creata');
}

// Esporta il pool per riutilizzarlo in tutte le API routes
export const pool = globalThis.pool!;