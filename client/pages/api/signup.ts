// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetchJson from '@/utils/fetchJson';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name, surname, password, phone, birthDate } = req.body;
  console.log(birthDate);
  try {
    const signupData = await fetchJson(`${process.env.API_BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, surname, password, phone, birthDate })
    });

    res.json(signupData);
  } catch (e) {
    console.log('Signup error:', e);
  }
}
