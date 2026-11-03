import { Request } from "express";

export interface Message {
  text: string;
  user: string;
  added: Date;
  id: number;
}

export interface RenderData {
  title: string;
  messages: Message[];
}

export type TypedBodyRequest<T> = Request<{}, {}, T>;

export interface MessageBodyRequest {
  messageUser: string;
  messageText: string;
}

export interface MessageParamsRequest {
  id: string;
}
