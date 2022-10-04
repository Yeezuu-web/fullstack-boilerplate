import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities';
import { UserRolesEntity } from './entities';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RoleEntity } from './entities';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [TypeOrmModule.forFeature([RoleEntity, UserRolesEntity, UserEntity])],
  exports: [RolesService]
})
export class RolesModule {}
