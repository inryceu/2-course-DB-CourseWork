const testDbUrl = process.env.DATABASE_URL_TEST;

if (!testDbUrl) {
  throw new Error(
    'DATABASE_URL_TEST must be set to prevent tests from running against production database',
  );
}

if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('test')) {
  console.warn(
    'WARNING: DATABASE_URL appears to be a production database. Tests will use DATABASE_URL_TEST instead.',
  );
}

process.env.DATABASE_URL = testDbUrl;
