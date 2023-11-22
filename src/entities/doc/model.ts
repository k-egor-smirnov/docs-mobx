import { makeAutoObservable } from "mobx";

export class DocsListModel {
  constructor() {
    makeAutoObservable(this);
  }
}
