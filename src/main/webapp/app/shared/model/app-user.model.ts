import { IUser } from 'app/core/user/user.model';

export interface IAppUser {
  id?: number;
  bla?: string;
  internalUser?: IUser;
}

export class AppUser implements IAppUser {
  constructor(public id?: number, public bla?: string, public internalUser?: IUser) {}
}
