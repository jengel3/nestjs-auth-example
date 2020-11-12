import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { User, RefreshToken } from './models'

import { AuthenticationModule } from './modules/authentication/authentication.module'
import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '',
      port: -1,
      username: '',
      password: '',
      database: '',
      models: [User, RefreshToken],
    }),
    UsersModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class ApplicationModule {}
