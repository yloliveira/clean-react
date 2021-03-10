import { AccountModel } from '../models/account'

export type AuthenticationParams = {
  email: String
  password: String
}

export default interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>
}
