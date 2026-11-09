import { body } from "express-validator";

export const validateMessageReq = [
  body("messageUser")
    .trim()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Username must contain only letters")
    .isLength({ min: 3, max: 32 })
    .withMessage("Username should be between 3 and 32 characters"),
  body("messageText")
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage("Text should be between 1 and 500 characters"),
];
