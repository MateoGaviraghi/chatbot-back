import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';

import { Response } from 'express';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  async login(@Body() body, @Res() res: Response) {
    const { name, password } = body;
    const user = await this.usersService.findUser(name, password);
    if (user) {
      res.status(HttpStatus.OK).json({ user });
    } else {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Invalid credentials' });
    }
  }

  @Post()
  async createUser(@Body() body, @Res() res: Response) {
    const { name, password } = body;
    const existingUser = await this.usersService.findUser(name, password);
    if (existingUser) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'Username already exists' });
    } else {
      const user = await this.usersService.createUser(name, password);
      res
        .status(HttpStatus.CREATED)
        .json({ message: 'User created successfully', user });
    }
  }
}
