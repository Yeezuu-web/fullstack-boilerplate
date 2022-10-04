import { Injectable } from '@nestjs/common';
import { CreateRolesDto, UpdateRolesDto } from './dto';

@Injectable()
export class RolesService {
  create(createRoleDto: CreateRolesDto) {
    return 'This action adds a new role';
  }

  findAll() {
    return `This action returns all role`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRolesDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
