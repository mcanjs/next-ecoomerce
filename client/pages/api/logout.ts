import { withIronSessionApiRoute } from 'iron-session/next';
import { ironConfig } from '@/config/iron-session';
import { NextApiRequest, NextApiResponse } from 'next';
import fetchJson from '@/utils/fetchJson';

async function logoutRouter(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;
  const url = `${process.env.API_BASE_URL}/logout`;

  if (typeof user !== 'undefined' && typeof user?.data !== 'undefined') {
    try {
      await fetchJson(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            user.data.token?.split('Authorization=')[1].split(';')[0]
          }`
        }
      });
      req.session.destroy();
      res.status(200).json({ isLoggedIn: false });
    } catch (error: any) {
      res.status(500).json(error.data);
    }
  } else {
    res.status(409).json({ data: { message: 'User not logged in before' } });
  }
}

export default withIronSessionApiRoute(logoutRouter, ironConfig);
