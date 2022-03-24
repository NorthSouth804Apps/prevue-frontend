export default class AuthModel {
  email = '';
  password = '';
  userType?: number = 1;
  loginType?: number = 1;
}

export class ResetPasswordModel {
  token = ''
  newPassword = ''
  passwordConfirmation = ''
}
