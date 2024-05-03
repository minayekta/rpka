import { Column, Task } from "../types/types";

export const defaultTasks: Task[] = [
    {
      id: "1",
      columnId: "todo",
      content: "read a book",
    },
    {
      id: "2",
      columnId: "todo",
      content:
        "develop todo list task",
    },
    {
      id: "3",
      columnId: "doing",
      content: "call to mom",
    },
    {
      id: "4",
      columnId: "doing",
      content: "buy giftcard",
    },
    {
      id: "5",
      columnId: "done",
      content: "gym",
    },
    {
      id: "6",
      columnId: "done",
      content: "call to mina",
    },
    {
      id: "7",
      columnId: "done",
      content: "read dnd doc",
    },
    {
      id: "8",
      columnId: "todo",
      content: "read next doc",
    },
    {
      id: "9",
      columnId: "todo",
      content: "see videos",
    },
   
  ];



  export const defaultCols: Column[] = [
    {
      id: "todo",
      title: "Todo",
    },
    {
      id: "doing",
      title: "in progress",
    },
    {
      id: "done",
      title: "Done :)",
    },
  ];