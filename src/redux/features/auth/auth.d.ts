

export interface AuthUserI {
  id: string;
  username: string;
  first_name?: string;
  last_name?: string;
  email: string;
}

export interface LoginPayloadI {
  token: {
    refresh: string;
    access: string;
  };
  user: AuthUserI;
}
