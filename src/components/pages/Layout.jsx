import React from 'react';
import { observer } from 'mobx-react';
import LeftMenu from './partials/LeftMenu.jsx';
import UserMenu from './partials/UserMenu.jsx';
import Notifications from '../../core/ui/Notifications.jsx';
import Popup from '../../core/ui/Popup.jsx';
import '../../staticFiles/js/app';
import '../../staticFiles/css/AdminLTE.css';
import '../../staticFiles/css/skins/_all-skins.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

@observer
export default class Layout extends React.Component {
  render() {
    return (
      <div class="hold-transition skin-blue sidebar-mini layout-boxed">
         <Notifications limit="3" ref={(link) => app.ui.notification = link} />
         <Popup ref={(link) => app.ui.popup = link} />
         <div class="wrapper">
           <header class="main-header">
            <a href="/" class="logo">
              <span class="logo-mini"><b>A</b>LT</span>
              <span class="logo-lg"><b>Admin</b></span>
            </a>
            <nav class="navbar navbar-static-top" role="navigation">
              <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
              </a>
              <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                  <li class="dropdown messages-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      <i class="fa fa-envelope-o"></i>
                      <span class="label label-success">4</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="header">You have 4 messages</li>
                      <li>
                        <ul class="menu">
                          <li>
                            <a href="#">
                              <div class="pull-left">
                                <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image" />
                              </div>
                              <h4>
                                Support Team
                                <small><i class="fa fa-clock-o"></i> 5 mins</small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="footer"><a href="#">See All Messages</a></li>
                    </ul>
                  </li>
                  <li class="dropdown notifications-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      <i class="fa fa-bell-o"></i>
                      <span class="label label-warning">10</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="header">You have 10 notifications</li>
                      <li>
                        <ul class="menu">
                          <li>
                            <a href="#">
                              <i class="fa fa-users text-aqua"></i> 5 new members joined today
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="footer"><a href="#">View all</a></li>
                    </ul>
                  </li>
                  <li class="dropdown tasks-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      <i class="fa fa-flag-o"></i>
                      <span class="label label-danger">9</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="header">You have 9 tasks</li>
                      <li>
                        <ul class="menu">
                          <li>
                            <a href="#">
                              <h3>
                                Design some buttons
                                <small class="pull-right">20%</small>
                              </h3>
                              <div class="progress xs">
                                <div class="progress-bar progress-bar-aqua" style={{ width: '20%' }} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                  <span class="sr-only">20% Complete</span>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="footer">
                        <a href="#">View all tasks</a>
                      </li>
                    </ul>
                  </li>
                  <UserMenu />
                </ul>
              </div>
            </nav>
          </header>
          <LeftMenu />
          <div class="content-wrapper">
            <section class="content-header">
              <h1>
                {app.page.title}<small>{app.page.description}</small>
              </h1>
            </section>
            <section class="content">
              { this.props.children }
            </section>
          </div>
          <footer class="main-footer">
            <div class="pull-right hidden-xs">
              Anything you want
            </div>
            <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
          </footer>
        </div>
      </div>
    );
  }
}
