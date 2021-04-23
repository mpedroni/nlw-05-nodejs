import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

import { User } from "./User";

@Entity("messages")
class Message {

  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  text: string;

  /**
   * Lê-se "muitas mensagens para um usuário"
   * 
   * Sempre a primeira parte (ex. Many) referencia a classe atual (Message) 
   * e a segunda (ex. ToOne) a propriedade (user)
   * 
   */
  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) this.id = uuid();
  }

}

export { Message };