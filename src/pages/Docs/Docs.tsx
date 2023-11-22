import { PanelHeader } from "@vkontakte/vkui";
import { Category } from "../../widgets/Category/Category";
import { withViewModel } from "../../with-view-model";
import { DocsViewModel } from "./viewModel";

export const Docs = withViewModel(DocsViewModel, ({ vm }) => {
  return (
    <>
      <PanelHeader>Docs</PanelHeader>
      <Category vm={vm.mainCategoryViewModel} />
    </>
  );
});
