export class Item {

    constructor(
      public id: string = '',
      public candidate: string = '',
      public task: string = '',
      public isCompleted: boolean = false,
      public isDeleted: boolean = false
    ) {  }
}