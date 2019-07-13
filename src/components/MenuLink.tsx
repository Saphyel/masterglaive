import React from "react";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

interface MenuItem {
  link: string;
  message: string;
}

class MenuLink extends React.Component<MenuItem> {
  render() {
    return(
      <NavLink className="nav-link" activeClassName="active" to={this.props.link}>
        <Button color="inherit">{this.props.message}</Button>
      </NavLink>
    );
  }
}

export default MenuLink;
