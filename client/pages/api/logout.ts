import { ironConfig } from '@/config/iron-session';
import { IUser } from '@/interfaces/User';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

export default withIronSessionApiRoute(logoutRoute, ironConfig);

async function logoutRoute(req: NextApiRequest, res: NextApiResponse<IUser>) {
  req.session.destroy();
  res.json({
    isLoggedIn: false
  });
}
