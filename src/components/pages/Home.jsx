import React from 'react';
import { observer } from 'mobx-react';

class Popup extends React.Component {
  render() {
    return (
      <div>
        <div class="modal-body">
          Popup body
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" onClick={() => app.ui.popup.close()}>Cancel</button>
        </div>
      </div>
    );
  }
}

@observer
export default class Todo extends React.Component {

  componentWillMount() {
    app.page.title = 'Home';
    app.page.description = 'optional description';
  }

  showNotification(type) {
    app.ui.notification.show({
      type,
      title: 'Notification title',
      message: 'Notification message'
    });
  }

  showPopup(type) {
    app.ui.popup.show({
      type,
      title: 'Popup title',
      body: <Popup style={{ width: '70%', maxWidth: '1250px' }} />
    });
  }

  render () {
    return (
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Notification demo</h3>
            </div>
            <div class="box-body">
              <button onClick={this.showNotification.bind(this, 'success')} class="btn btn-success fa fa-check">Success</button>
              <button onClick={this.showNotification.bind(this, 'info')} class="btn btn-info fa fa-info">Info</button>
              <button onClick={this.showNotification.bind(this, 'warning')} class="btn btn-warning fa fa-warning">Warning</button>
              <button onClick={this.showNotification.bind(this, 'danger')} class="btn btn-danger fa fa-ban">Danger</button>
            </div>
            <div class="box-footer">
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Popup demo</h3>
            </div>
            <div class="box-body">
              <button onClick={this.showPopup.bind(this, 'success')} class="btn btn-success">Success</button>
              <button onClick={this.showPopup.bind(this, 'info')} class="btn btn-info">Info</button>
              <button onClick={this.showPopup.bind(this, 'warning')} class="btn btn-warning">Warning</button>
              <button onClick={this.showPopup.bind(this, 'danger')} class="btn btn-danger">Danger</button>
              <button onClick={this.showPopup.bind(this, 'default')} class="btn btn-default">Default</button>
            </div>
            <div class="box-footer">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
