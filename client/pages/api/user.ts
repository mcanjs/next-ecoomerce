import { ironConfig } from '@/config/iron-session';
import { IUser } from '@/interfaces/User';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

export default withIronSessionApiRoute(userRoute, ironConfig);

async function userRoute(req: NextApiRequest, res: NextApiResponse<IUser>) {
  const user = req.session.user;
  if (user?.data) {
    res.json({
      data: user.data,
      isLoggedIn: true
    });
  } else {
    res.json({
      isLoggedIn: false
    });
  }
}
