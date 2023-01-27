export interface IUserInformation {
  token?: string;
  email: string;
  name: string;
  surname: string;
}

export interface IUser {
  data?: IUserInformation;
  isLoggedIn?: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}
