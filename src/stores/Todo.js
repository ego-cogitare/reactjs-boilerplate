import { observable } from 'mobx';

class TodoStore {
  @observable todos = ['Do somethidng', 'Do somethidng else'];
}

export default new TodoStore();
