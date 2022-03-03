import BaseModel from "./base.model";

export class MenuEntity {
  title = '';
  value = ''
}

export default class MenusModel extends BaseModel<MenuEntity> {
  constructor() {
    super();
    this.data = new MenuEntity()
  }
}

const model = new MenusModel();
