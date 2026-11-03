import { Request, Response } from "express";
import { messages } from "../db";
import {
  MessageBodyRequest,
  MessageParamsRequest,
  TypedBodyRequest,
} from "../types/types";

export class MessageController {
  public getFormPage(req: Request, res: Response) {
    res.render("form");
  }

  public getDetailsPage(req: Request<MessageParamsRequest>, res: Response) {
    const { id } = req.params;
    const foundMessageById = messages.find((m) => (m.id === Number(id)));

    if (foundMessageById) res.render("details", foundMessageById);
    else res.redirect("/");
  }

  public createMessage(
    req: TypedBodyRequest<MessageBodyRequest>,
    res: Response,
  ) {
    const { messageUser, messageText } = req.body;
    const id = messages[messages.length - 1].id + 1;
    messages.push({
      text: messageText,
      user: messageUser,
      added: new Date(),
      id,
    });
    res.redirect("/");
  }
}
