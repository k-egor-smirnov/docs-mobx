import { inject, injectable } from "tsyringe";
import { FiltersService } from "../../features/filters";

@injectable()
class RightMenuModel {
  #filtersService: FiltersService;

  constructor(@inject(FiltersService) private filtersService: FiltersService) {
    this.#filtersService = filtersService;
  }

  setTag(tag: string) {
    this.#filtersService.setTag(tag);
  }
}

export { RightMenuModel };
