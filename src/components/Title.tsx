import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

interface Text {
  children: string;
}

class Title extends React.Component<Text> {
  render() {
    return(
      <Toolbar variant="dense">
        <Typography variant="h6">{this.props.children}</Typography>
      </Toolbar>
    );
  }
}

export default Title;
