import { API_VERSION, createClient } from '@juliosampaio/cms-client'

export async function POST(request: Request) {
  const client = createClient()

  console.log({ API_VERSION })

  return new Response(await client.getPage('pageName'))
}
