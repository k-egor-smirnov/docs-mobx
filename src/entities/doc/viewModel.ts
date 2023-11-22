import { inject, injectable } from "tsyringe";
import { DocsListModel } from "./model";

@injectable()
export class DocsListViewModel {
  #model: DocsListModel;

  constructor(@inject(DocsListModel) private model: DocsListModel) {
    this.#model = model;
  }
}
