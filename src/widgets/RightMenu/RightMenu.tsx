import { Group, PanelHeader, SimpleCell } from "@vkontakte/vkui";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { RightMenuModel } from "./model";
import { RightMenuViewModel } from "./viewModel";
import { container } from "tsyringe";

export const RightMenu = observer(() => {
  const [vm] = useState(
    () => new RightMenuViewModel(container.resolve(RightMenuModel))
  );

  return (
    <>
      <PanelHeader />
      <Group>
        <SimpleCell onClick={() => vm.selectTag("foo")}>foo</SimpleCell>
        <SimpleCell onClick={() => vm.selectTag("bar")}>bar</SimpleCell>
        <SimpleCell onClick={() => vm.selectTag("baz")}>baz</SimpleCell>
      </Group>
    </>
  );
});
