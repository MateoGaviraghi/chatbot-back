import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entities/message.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
  ) {}

  async createMessage(msg: string, room: string, user: User): Promise<Message> {
    const message = this.messagesRepository.create({ msg, room, user });
    return this.messagesRepository.save(message);
  }
}
