import { MouseEvent, ReactNode, useState } from "react";
import { SimpleCell } from "@vkontakte/vkui";
import { DocsListViewModel } from "./viewModel";
import { observer } from "mobx-react-lite";
import { container } from "tsyringe";

export interface Doc {
  id: number;
  title: string;
  tags: string[];
}

export const DocItem = observer(
  ({
    doc,
    children,
    after,
    onTagClick,
  }: {
    doc: Doc;
    children?: ReactNode | ReactNode[];
    after?: ReactNode | ReactNode[];
    onTagClick?: (event: MouseEvent<HTMLAnchorElement>, tag: string) => void;
  }) => {
    return (
      <SimpleCell after={after}>
        {doc.title}
        <div>
          {doc.tags.map((tag) => (
            <span style={{ marginRight: 4 }}>
              <a onClick={(event) => onTagClick?.(event, tag)} href="#">
                {tag}
              </a>
            </span>
          ))}
        </div>
        {children}
      </SimpleCell>
    );
  }
);
