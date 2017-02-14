import React from 'react';
import BootstrapTable from 'reactjs-bootstrap-table';
import { fetchRows } from '../../actions/Tables';

export default class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selection: [], rows: [] };
  }

  componentWillMount() {
    app.page.title = 'Data tables';
    app.page.description = 'optional description';
    this.tableReload();
  }

  addRow(data) {
    this.setState({ rows: [...this.state.rows, data] });
  }

  get columns() {
    return [
      { name: 'id', display: 'ID', sort: true },
      { name: 'title', display: 'Title', sort: true },
      { name: 'delete', display: 'Delete', sort: false, renderer: (row) => <div onClick={this.deleteRow.bind(this, row)}>Delete</div> },
    ];
  }

  deleteRow(row) {
    setTimeout(() => {
      this.rows = this.state.rows.filter((r) => r.id !== row.id);
      this.setState({ rows: this.rows });
    }, 500)
  }

  onSort(colName, dir) {
    switch (dir) {
      case 'asc':
        this.setState({
          rows: this.state.rows.sort((a, b) => a[colName] > b[colName] ? 1 : -1)
        });
      break;

      case 'desc':
        this.setState({
          rows: this.state.rows.sort((a, b) => b[colName] > a[colName] ? 1 : -1)
        });
      break;
    }
  }

  onChange(selection) {
    this.setState({ selection });
  }

  onFilter(e) {
    const filter = e.target.value;
    this.setState({
      rows: this.rows.filter((r) => !!r.title.match(new RegExp(filter, 'i')))
    })
  }

  tableReload() {
    fetchRows((r) => {
      this.rows = r.courses.map((c) => ({ id: c.id, title: c.name }));
      this.setState({ rows: this.rows });
    });
  }

  render () {
    return (
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Data tables demo</h3>
            </div>

            <div style={{ margin: '10px 10px 0', height: '34px' }}>
              <b>Displayed:</b> {this.state.rows.length} record
              <div class="input-group pull-right" style={{ width: '230px' }}>
                <input type="text" class="form-control" onChange={this.onFilter.bind(this)} placeholder="Type filter keyword" />
                <span class="input-group-addon"><i class="fa fa-search"></i></span>
              </div>
            </div>

            <div class="box-body">
              <BootstrapTable
                columns={this.columns}
                data={this.state.rows}
                headers={true}
                resize={true}
                select="multiple"
                selected={this.state.selection}
                onSort={this.onSort.bind(this)}
                onChange={this.onChange.bind(this)}
              >
                <div class="text-center">Nothing to display.</div>
              </BootstrapTable>
            </div>
            <div class="box-footer">
              <button class="btn btn-primary" onClick={this.tableReload.bind(this)}>Reload</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
