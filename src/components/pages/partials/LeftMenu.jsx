import React from 'react';
import { Link } from 'react-router';

export default () => (
  <aside class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu">
        <li>
          <Link to="home"><i class="fa fa-link"></i> <span>Home</span></Link>
          <Link to="todo"><i class="fa fa-link"></i> <span>Todo</span></Link>
          <Link to="tables"><i class="fa fa-link"></i> <span>Data tables</span></Link>
        </li>
      </ul>
    </section>
  </aside>
);
