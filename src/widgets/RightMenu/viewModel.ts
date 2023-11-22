import { makeAutoObservable } from "mobx";
import { RightMenuModel } from './model';

export class RightMenuViewModel {
  test = "123";
  model: RightMenuModel;

  constructor(model: RightMenuModel) {
    makeAutoObservable(this);
    this.model = model;
  }

  selectTag(tag: string) {
    this.model.setTag(tag);
  }
}
