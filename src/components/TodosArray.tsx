export interface Itodo{
  id: number,
  title: string,
  isCompleted: boolean
}

export const todos: Itodo[] = [
  {
    id: 1,
    title: "убраться",
    // subtitle: "убрать комнату, привести в порядок стол",
    isCompleted: false,
  },
  {
    id: 2,
    title: "продукты",
    // subtitle: "сходить за продуктами",
    isCompleted: false,
  },
];
