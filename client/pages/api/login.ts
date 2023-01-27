import { withIronSessionApiRoute } from 'iron-session/next';
import { ironConfig } from '@/config/iron-session';
import { NextApiRequest, NextApiResponse } from 'next';
import fetchJson from '@/utils/fetchJson';

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = await req.body;
  const url = `${process.env.API_BASE_URL}/login`;
  try {
    const result = await fetchJson(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const token = result.token.split('Authorization=')[1].split(';')[0];

    if (!token) throw { data: { message: 'Error for token' } };
    const user = { isLoggedIn: true, data: result };
    req.session.user = user;
    await req.session.save();
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json(error.data);
  }
}

export default withIronSessionApiRoute(loginRoute, ironConfig);
