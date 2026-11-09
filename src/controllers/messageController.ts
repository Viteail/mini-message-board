import { Request, Response } from "express";
import {
  MessageBodyRequest,
  MessageParamsRequest,
  RenderData,
  TypedBodyRequest,
} from "../types/types.js";
import { MessagesRepository } from "../db/queries.js";
import { validateMessageReq } from "../validation/messages.js";
import { matchedData, validationResult } from "express-validator";

const messagesRepo = new MessagesRepository();

export class MessageController {
  async getMessagesPage(req: Request, res: Response) {
    const messages = await messagesRepo.getAllMessages();

    const renderData: RenderData = {
      title: "Mini Messageboard",
      messages,
    };

    res.render("index", renderData);
  }

  getFormPage(req: Request, res: Response) {
    res.render("form");
  }

  async getDetailsPage(req: Request<MessageParamsRequest>, res: Response) {
    const { id } = req.params;
    const messages = await messagesRepo.getMessageById(Number(id));

    res.render("details", messages);
  }

  createMessage = [
    ...validateMessageReq,
    async (req: TypedBodyRequest<MessageBodyRequest>, res: Response) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).render("form", { errors: errors.array() });

      const { messageUser, messageText } = matchedData<MessageBodyRequest>(req);
      await messagesRepo.createMessage({ messageText, messageUser });

      res.redirect("/");
    },
  ];
}
