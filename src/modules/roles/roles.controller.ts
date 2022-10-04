import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRolesDto, UpdateRolesDto } from './dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() createRolesDto: CreateRolesDto) {
    return this.rolesService.create(createRolesDto);
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolesDto: UpdateRolesDto) {
    return this.rolesService.update(+id, updateRolesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
