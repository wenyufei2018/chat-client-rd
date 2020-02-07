export interface IUser{
  userId: string;
  avatar?: string;
  friends?: string[];
}

export type MessageType = "text" | "image" | "video" | "audio";

export interface IMessage{
  type: MessageType;
  content: string;
  created: Date;
  messageId: string;
  users: string[];
  userId: string;
}
