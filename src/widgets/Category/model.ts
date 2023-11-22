import { makeAutoObservable } from "mobx";
import { container } from "tsyringe";
import { FiltersService } from "../../features/filters";

interface DocItem {
  id: number;
  title: string;
  tags: string[];
}

class CategoryModel {
  type: "own" | "global";
  filtersService = container.resolve(FiltersService);

  constructor(type: "own" | "global") {
    makeAutoObservable(this);
    this.type = type;
  }

  offset = 0;
  data: DocItem[] | null = null;

  async fetchMore() {
    console.log("tag", this.filtersService.tag);
    const method = this.filtersService.apiQuery ? "docs.search" : "docs.get";
    const params: Record<string, string> = {
      count: "10",
      return_tags: "1",
      v: "5.200",
      access_token: '',
    };

    if (this.filtersService.type) {
      params["type"] = this.filtersService.type.toString();
    }

    if (this.filtersService.apiQuery) {
      params["q"] = this.filtersService.apiQuery;
    }

    const res = await fetch(
      "https://api.vk.com/method/" +
        method +
        "?" +
        new URLSearchParams(params).toString()
    );
    const json = await res.json();
    console.log(json);
    this.data = json.response.items.map((v: any) => ({
      id: v.id,
      title: v.title,
      tags: v.tags,
    }));
  }

  selectTag(tag: string) {
    this.filtersService.setTag(tag);
    this.fetchMore();
  }
}

export { CategoryModel };
