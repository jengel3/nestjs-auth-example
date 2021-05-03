import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { User } from '../../models'

import { UsersService } from './users.service'
import { UsersRepository } from './users.repository'

@Module({
  imports: [
    SequelizeModule.forFeature([
      User,
    ]),
  ],
  providers: [
    UsersService,
    UsersRepository,
  ],
  exports: [
    UsersService,
    UsersRepository,
  ],
})
export class UsersModule {}
