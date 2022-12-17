import fetchJson from '@/utils/fetchJson';
import { ironConfig } from '@/config/iron-session';
import { IUser, IUserInformation } from '@/interfaces/User';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
export default withIronSessionApiRoute(loginRoute, ironConfig);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = await req.body;
  try {
    const loginData: IUserInformation = await fetchJson(
      `${process.env.API_BASE_URL}/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      }
    );

    const data = {
      data: loginData,
      isLoggedIn: true
    };

    req.session.user = data;
    await req.session.save();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
