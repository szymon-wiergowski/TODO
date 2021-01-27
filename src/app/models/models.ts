export interface Task {
    status: string;
    data: Data[];
}

export interface Data {
    id?: string;
    candidate?: string;
    task?: string;
    isCompleted?: boolean;
    isDeleted?: boolean;
}

export class Item {

    constructor(
      public id: string = '',
      public candidate: string = '',
      public task: string = '',
      public isCompleted: boolean = false,
      public isDeleted: boolean = false
    ) {  }
}