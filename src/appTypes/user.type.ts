export interface IUser {
  id?: string;
  user: string;
  password: string;
}

export interface ITokenData {
  access_token?: string;
  reset_token?: string;
}
