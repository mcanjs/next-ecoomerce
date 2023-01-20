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
