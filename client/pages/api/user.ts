import { withIronSessionApiRoute } from 'iron-session/next';
import { ironConfig } from '@/config/iron-session';
import { NextApiRequest, NextApiResponse } from 'next';

function userRoute(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;

  if (user) {
    res.json({
      isLoggedIn: true,
      ...user
    });
  } else {
    res.json({
      isLoggedIn: false
    });
  }
}

export default withIronSessionApiRoute(userRoute, ironConfig);
