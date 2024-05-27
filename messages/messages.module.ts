import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { Chat } from '../entities/chat.entity';
import { User } from '../entities/user.entity';
import { Message } from '../entities/message.entity';
import { MessageGateway } from './messages.gateway';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Chat, Message, User]), UsersModule],
  providers: [MessagesService, MessageGateway],
  controllers: [MessagesController],
  exports: [MessagesService],
})
export class MessagesModule {}
