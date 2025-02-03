import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      return res.status(200).json({ message: 'Hello World' })
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
  
  return res.status(405).json({ error: 'Method not allowed' })
}