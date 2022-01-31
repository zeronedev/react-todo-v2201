import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  categori: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
