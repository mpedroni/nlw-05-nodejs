import { Request, Response } from "express";

import { MessagesService } from "../services/MessagesService";


class MessagesController {
  private messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  async create(request: Request, response: Response) {
    const { admin_id, text, user_id } = request.body;

    

    const message = await this.messagesService.create({
      admin_id,
      text,
      user_id
    })

    return response.json(message);
  }

  async showByUser(request: Request, response: Response) {
    const { id } = request.params;

    

    const list = await this.messagesService.listByUser(id);

    return response.json(list);
  }
}

export { MessagesController };