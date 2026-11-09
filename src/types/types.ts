import { Request } from "express";

export interface Message {
  id: number;
  message: string;
  username: string;
  date: string;
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
