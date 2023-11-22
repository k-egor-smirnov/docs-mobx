import { makeAutoObservable } from "mobx";

export class FiltersService {
  query: string | null = null;
  tag: string | null = null;
  type: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setQuery(query: string) {
    this.query = query;
    this.tag = null;
  }

  setTag(tag: string) {
    this.tag = tag;
    this.query = null;
    this.type = null;
  }

  setType(type: number) {
    this.type = type;
    this.tag = null;
  }

  get apiQuery() {
    return this.query ?? this.tag;
  }
}
