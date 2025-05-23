interface AuthUserI {
  id: string;
  username: string;
  first_name?: string;
  last_name?: string;
  email: string;
}

interface LoginPayloadI {
  refresh: string;
  access: string;
  is_admin: boolean;
  is_verified: boolean;
  username: string;
  email: string;
}

interface SignUpI {
  username: string;
  email: string;
  password: string;
}

interface LoginI {
  email: string;
  password: string;
}

interface ResetPasswordI {
  email: string;
  otp: string;
  new_password: string;
}