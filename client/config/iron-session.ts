import { IUser } from '@/interfaces/User';
import { IronSessionOptions } from 'iron-session';

export const ironConfig: IronSessionOptions = {
  cookieName: process.env.IRON_SESSION_COOKIE_NAME || '',
  password: process.env.IRON_SESSION_PASSWORD || '',
  cookieOptions: {
    secure: false, // If we are use https in that case set true this option otherwise we don't use true
    maxAge: 60 * 60 * 24 * 1 // 1 Day
  }
};

declare module 'iron-session' {
  interface IronSessionData {
    user?: IUser;
  }
}
