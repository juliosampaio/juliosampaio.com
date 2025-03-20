import { createClient } from '@juliosampaio/cms-client';

export async function POST() {
  const client = createClient();

  return new Response(await client.getPage('pageName'));
}
