export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

export interface IPostResponse {
  total: number;
  skip: number;
  limit: number;
  posts: IPost[];
}

export interface IPostForm {
  title: string;
  body: string;
  userId: number;
  tags: string[];
}

export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
