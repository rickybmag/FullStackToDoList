export class ToDo {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

export class Convert {
  public static toToDo(json: string): ToDo {
    return JSON.parse(json);
  }

  public static toDoToJson(value: ToDo): string {
    return JSON.stringify(value);
  }
}
