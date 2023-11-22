import { Group, Title } from "@vkontakte/vkui";
import { CategoryViewModel } from "./viewModel";
import { observer } from "mobx-react-lite";
import { DocItem } from "../../entities/doc";
import { withViewModel } from "../../with-view-model";

export const Category = withViewModel(
  CategoryViewModel,
  observer(({ vm }) => {
    return (
      <Group>
        <Title>Test</Title>
        {vm.data?.map((doc) => {
          return (
            <DocItem
              doc={doc}
              onTagClick={(event, tag) => {
                event.preventDefault();
                vm.handleTagClick(tag);
              }}
            ></DocItem>
          );
        })}
      </Group>
    );
  })
);
