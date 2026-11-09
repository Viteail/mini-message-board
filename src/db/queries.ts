import { NotFoundError } from "../custom-errors/errors.js";
import { MessageBodyRequest } from "../types/types.js";
import { pool } from "./pool.js";

export class MessagesRepository {
  async getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  }

  async getMessageById(id: number) {
    const { rows } = await pool.query(
      "SELECT * FROM messages WHERE id = ($1)",
      [id],
    );

    if (!rows[0]) throw new NotFoundError(`Message ${id} not found`);

    return rows[0];
  }

  async createMessage(messageReq: MessageBodyRequest) {
    const { messageText, messageUser } = messageReq;
    await pool.query(
      "INSERT INTO messages (message, username, date) VALUES ($1, $2, NOW())",
      [messageText, messageUser],
    );
  }
}
