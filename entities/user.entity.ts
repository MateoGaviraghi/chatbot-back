import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  password: string;
}

//     @Entity()
//     export class Chat {
//       @PrimaryGeneratedColumn('uuid')
//       id: string;

//       @Column()
//       iduser: string;
//       @Column()
//       idTrainer: string;

//       @Column()
//       room: string; // id user

//       @Column('jsonb')
//       messages: { user: string; body: string }[];

//       @CreateDateColumn()
//       createdAt: Date;
//     }

//Guardar mensajes
// app.post('/messages', async (req, res) => {
//   const { userId, room, message } = req.body;

//   let chat = await chatRepository.findOne({ where: { room } });
//   if (!chat) {
//     chat = new Chat();
//     chat.userId = userId;
//     chat.room = room;
//     chat.messages = [];
//   }

//   chat.messages.push(message);
//   await chatRepository.save(chat);

//   res.send(chat);
// });

// //Para el entrenador
// app.get('/messages/user/:userId', async (req, res) => {
//   const { userId } = req.params;
//   const chats = await chatRepository.find({ where: { userId } });
//   res.send(chats);
// });

// //para el usuario
// app.get('/messages/room/:room', async (req, res) => {
//   const { room } = req.params;
//   const chats = await chatRepository.find({ where: { room } });
//   res.send(chats);
// });
