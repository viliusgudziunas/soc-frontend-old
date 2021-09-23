export interface UserDto {
  email: string;
  name: string;
}

export interface UserAuthModel extends UserDto {
  password: string;
  confirmPassword?: string;
}
