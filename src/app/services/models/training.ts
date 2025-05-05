export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Training {
  id?: number;
  title: string;
  trainer:String;
  description: string;
  category: string;
  location: string;
  deadline: string;
  startDate:String;
  endDate:String;
  type: string;
  postedBy?: User;
}
