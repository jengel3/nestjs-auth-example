import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { SequelizeModule } from '@nestjs/sequelize'

import { UsersModule } from '../users/users.module'

import { RefreshToken } from '../../models'

import { TokensService } from './tokens.service'
import { RefreshTokensRepository } from './refresh-tokens.repository'

import { AuthenticationController } from './authentication.controller'

@Module({
  imports: [
    SequelizeModule.forFeature([
      RefreshToken,
    ]),
    JwtModule.register({
      secret: '<SECRET KEY>',
      signOptions: {
        expiresIn: '5m',
      },
    }),
    UsersModule,
  ],
  controllers: [
    AuthenticationController,
  ],
  providers: [
    TokensService,
    RefreshTokensRepository,
  ],
})
export class AuthenticationModule {}
