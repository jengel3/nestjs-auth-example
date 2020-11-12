import { IsNotEmpty, MinLength } from 'class-validator'

export class LoginRequest {
  @IsNotEmpty({ message: 'A username is required' })
  readonly username: string

  @IsNotEmpty({ message: 'A password is required to login' })
  readonly password: string
}

export class RegisterRequest {
  @IsNotEmpty({ message: 'An username is required' })
  readonly username: string

  @IsNotEmpty({ message: 'A password is required' })
  @MinLength(6, { message: 'Your password must be at least 6 characters' })
  readonly password: string
}

export class RefreshRequest {
  @IsNotEmpty({ message: 'The refresh token is required' })
  readonly refresh_token: string
}
