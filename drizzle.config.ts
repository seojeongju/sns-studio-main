import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/schema.ts',
  out: './migrations',
  driver: 'd1',
  dbCredentials: {
    wranglerConfigPath: 'wrangler.toml',
    dbName: 'sns_studio_db',
  },
} satisfies Config;
