import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto, UpdateUsersDto } from './dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.userService.create(createUsersDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto) {
    return this.userService.update(+id, updateUsersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
