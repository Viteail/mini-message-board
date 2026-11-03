import { Message } from "./types/types";

export const messages: Message[] = [
  {
    text: "Hello there!",
    user: "Obi Wan",
    added: new Date(),
    id: 1,
  },
  {
    text: "General Kenobi. You are a bold one.",
    user: "General Grievous",
    added: new Date(Date.now() - 5 * 60 * 1000),
    id: 2,
  },
  {
    text: "I have a bad feeling about this.",
    user: "Han Solo",
    added: new Date(Date.now() - 30 * 60 * 1000),
    id: 3,
  },
  {
    text: "Do or do not. There is no try.",
    user: "Yoda",
    added: new Date(Date.now() - 2 * 60 * 60 * 1000),
    id: 4,
  },
  {
    text: "This is the way.",
    user: "Din Djarin",
    added: new Date(Date.now() - 24 * 60 * 60 * 1000),
    id: 5,
  },
  {
    text: "I find your lack of faith disturbing.",
    user: "Darth Vader",
    added: new Date("2026-10-31T10:00:00Z"),
    id: 6,
  },
];
