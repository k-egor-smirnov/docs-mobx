import { inject, injectable } from "tsyringe";
import { CategoryModel } from "./model";

@injectable()
class CategoryViewModel {
  #model: CategoryModel;

  constructor(@inject(CategoryModel) private model: CategoryModel) {
    this.#model = model;
    this.#model.fetchMore();
  }

  get data() {
    return this.#model.data;
  }

  handleTagClick(tag: string) {
    console.log("select", tag);
    this.#model.selectTag(tag);
  }
}

export { CategoryViewModel };
