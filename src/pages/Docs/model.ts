import { container } from "tsyringe";
import { CategoryViewModel } from "../../widgets/Category/viewModel";
import { autorun } from "mobx";
import { TagsService } from "../../features/tags/tags";

class DocsModel {
  mainCategoryViewModel = container.resolve(CategoryViewModel);
  tagsService = new TagsService();

  constructor() {
    console.log(this.mainCategoryViewModel);

    autorun(() => {
      this.tagsService.addTags(
        this.mainCategoryViewModel.data?.flatMap((v) => v.tags) || []
      );
    });
  }
}

export { DocsModel };
