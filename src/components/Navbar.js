import React from "react"
import {NavLink} from "react-router-dom";

export default () => (
  <nav className="navbar navbar-dark bg-dark">
    <div className="navbar-brand">
      <ul className="navbar-nav">
        <li className="nav-item active mr-5">
          <NavLink className="nav-link" to="/">React Redux</NavLink>
        </li>
        <li className="nav-item mr-3">
          <NavLink className="nav-link" to="/posts">Посты</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/comments">Комментарии</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)