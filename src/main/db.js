import { Client } from 'pg';

export default async () => {
  const client = new Client({
    user: 'witch',
    password: '170904',
    host: 'localhost',
    port: '5432',
    database: 'demo',
  });

  await client.connect();
  return client;
};