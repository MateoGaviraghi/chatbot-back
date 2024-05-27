import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { Message } from '../entities/message.entity';
import { User } from '../entities/user.entity';
import { UsersService } from '../users/users.service'; // Importar UsersService si es necesario
import { Chat } from 'src/entities/chat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User, Chat])],
  providers: [MessagesService, UsersService], // Incluir UsersService en los providers
  controllers: [MessagesController],
  exports: [MessagesService],
})
export class MessagesModule {}
