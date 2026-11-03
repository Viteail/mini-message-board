import { Router } from "express";
import { MessageController } from "../controllers/messageController";

export const messageRouter = Router();
const messageController = new MessageController();

messageRouter.get("/", messageController.getFormPage);
messageRouter.post("/", messageController.createMessage);
messageRouter.get("/:id", messageController.getDetailsPage);
