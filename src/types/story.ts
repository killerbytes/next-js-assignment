import { Author } from "./author";
import { Item } from "./item";

export interface Story extends Item {
  author: Author;
}
