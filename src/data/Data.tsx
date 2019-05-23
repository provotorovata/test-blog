import { generate as id } from "shortid";
import { tag, post } from "../interfaces/Interfaces";

class DataApi {
  private tags: Array<tag>;
  private posts: Array<post>;

  constructor() {
    this.tags = [
      { id: "1", title: "Кожа лица", isActive: 1 },
      { id: "2", title: "Для тела", isActive: 1 },
      { id: "3", title: "Для волос", isActive: 1 },
      { id: "4", title: "Декоративная косметика", isActive: 1 }
    ];
    this.posts = [
      {
        id: id(),
        title: "Витамины для волос, кожи и ногтей",
        text: "ляляля",
        isActive: 1,
        creationDate: new Date(),
        comments: ["1", "2", "3"],
        titleImage: "",
        images: [],
        tags: ["1", "2"]
      },
      {
        id: id(),
        title: "Восстановление структуры волос",
        text: "ляляля2",
        isActive: 1,
        creationDate: new Date(),
        comments: ["1", "2"],
        titleImage: "",
        images: [],
        tags: ["1"]
      },
      {
        id: id(),
        title: "Ламинирование волос, правда и мифы))))",
        text: "ляляля3",
        isActive: 1,
        creationDate: new Date(),
        comments: ["1", "4"],
        titleImage: "",
        images: [],
        tags: ["1", "4"]
      }
    ];
  }

  getTags() {
    return [...this.tags];
  }

  addNewTags(nameTag: string) {
    this.tags.push({ id: id(), title: nameTag, isActive: 1 });
    return [...this.tags];
  }

  getPostList() {
    return [...this.posts];
  }
}

export const newData = new DataApi();
