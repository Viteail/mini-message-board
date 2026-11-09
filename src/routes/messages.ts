import { Router } from "express";
import { MessageController } from "../controllers/messageController.js";

export const messageRouter = Router();
const messageController = new MessageController();

messageRouter.get("/", messageController.getMessagesPage);

messageRouter.get("/new", messageController.getFormPage);

messageRouter.post("/new", messageController.createMessage);

messageRouter.get("/:id", messageController.getDetailsPage);
