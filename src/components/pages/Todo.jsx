import React from 'react';
import { observer } from 'mobx-react';
import store from '../../stores/Todo';

@observer
export default class Todo extends React.Component {

  componentWillMount() {
    app.page.title = 'Todo';
    app.page.description = 'optional description';
  }

  addTodo() {
    const title = this.refs.todo.value;
    if (title.trim() === '') {
      return false;
    }
    store.todos.push(title);
    this.refs.todo.value = '';
  }

  render () {
    return (
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Add new todo</h3>
            </div>
            <div class="box-body">
              <div class="form-group">
                <label>Todo title</label>
                <input
                  type="text"
                  placeholder="Type todo title"
                  class="form-control"
                  onKeyDown={(e) => e.which === 13 && this.addTodo()}
                  ref="todo"
                  autoFocus
                />

                <ul>
                  {store.todos.map((todo, key) => (
                    <li key={key}>{todo}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="box-footer">
              <button class="btn btn-primary" onClick={this.addTodo.bind(this)}>Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
