import React from 'react';

export default class UserMenu extends React.Component {
  render() {
    return (
      <li class="dropdown user user-menu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
          <img src="mock/pexels-photo.jpg" class="user-image" alt="User Image" />
          <span class="hidden-xs">Alexander Bogish</span>
        </a>
        <ul class="dropdown-menu">
          <li class="user-header">
            <img src="mock/pexels-photo.jpg" class="img-circle" alt="User Image" />
            <p>
              Alexander Bogish - Web Developer
              <small>Member since Dec. 2016</small>
            </p>
          </li>
          <li class="user-body">
            <div class="row">
              <div class="col-xs-4 text-center">
                <a href="#">Followers</a>
              </div>
              <div class="col-xs-4 text-center">
                <a href="#">Sales</a>
              </div>
              <div class="col-xs-4 text-center">
                <a href="#">Friends</a>
              </div>
            </div>
          </li>
          <li class="user-footer">
            <div class="pull-left">
              <a href="#" class="btn btn-default btn-flat">Profile</a>
            </div>
            <div class="pull-right">
              <a href="#" class="btn btn-default btn-flat">Sign out</a>
            </div>
          </li>
        </ul>
      </li>
    );
  }
}
