export interface IUser {
  id: string,
  username:string,
  email: string
  password: string
}

export interface IUserBasic {
  id: string,
  username:string,
  email: string
}

export interface IAuthRequest {
  email: string,
  password: string
}

export interface IRegisterRequest {
  email: string,
  password: string,
  username: string
}
