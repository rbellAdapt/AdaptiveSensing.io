import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function proxy(request: NextRequest) {
  // Only intercept requests heading to the remote Python Simulator
  if (request.nextUrl.pathname.startsWith('/api/simulate/')) {
    const requestHeaders = new Headers(request.headers)
    // Securely embed the API key from your Vercel/Node environment
    requestHeaders.set('X-API-Key', process.env.UAS_API_KEY || '')
    
    return NextResponse.next({
      request: { headers: requestHeaders },
    })
  }
  
  return NextResponse.next()
}
