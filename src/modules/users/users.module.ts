import { RolesModule } from './../roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity } from './entities';
import { UserRolesEntity } from '../roles/entities';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      UserRolesEntity,
      // RefreshTokenSessionsEntity,
      // Roles  // if ManyToMany cascade relation
    ]),
    RolesModule,
    forwardRef(() => AuthModule),
    // MailModule,
    // FileModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
