export interface RegisterFormData {
  username: string;
  password: string;
  name: string;
  email: string;
}

export interface LoginFormData {
  username: string;
  password: string;
}

export interface UserResponseApi {
  name: string;
  username: string;
}
