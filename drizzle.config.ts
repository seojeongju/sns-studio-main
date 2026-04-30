import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/lib/schema.ts',
  out: './migrations',
  dialect: 'sqlite', // D1은 SQLite 기반
  dbCredentials: {
    url: '.wrangler/state/v3/d1/miniflare-D1DatabaseObject/local.sqlite',
  },
});
