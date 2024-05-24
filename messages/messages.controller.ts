import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { UsersService } from '../users/users.service';
import { Response } from 'express';

@Controller('api/messages')
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async createMessage(@Body() body, @Res() res: Response) {
    const { msg, room, userId } = body;
    const user = await this.usersService.findUserById(userId);
    if (user) {
      const message = await this.messagesService.createMessage(msg, room, user);
      res.status(HttpStatus.CREATED).json({ message });
    } else {
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'User not found' });
    }
  }
}
