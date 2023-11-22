import { inject, injectable } from "tsyringe";
import { DocsModel } from "./model";

@injectable()
class DocsViewModel {
  #model: DocsModel;

  constructor(@inject(DocsModel) private model: DocsModel) {
    this.#model = model;
  }

  get mainCategoryViewModel() {
    return this.#model.mainCategoryViewModel;
  }
}

export { DocsViewModel };
