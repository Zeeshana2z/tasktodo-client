export class Task {
  id: number;
  name: string;
  status:eStatus;
  description:string;
}

export enum eStatus{
  Pending = 1,
  Completed = 2
}
