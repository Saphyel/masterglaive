import React from "react";
import Button from "@material-ui/core/Button";

interface Details {
  color: PropTypes.Color;
  size: string;
  type: string;
  onClick: any;
  disabled: boolean;
  
}

class RaisedButton extends React.Component<Details> {
  render() {
    return (
      <Button
        variant="contained"
        color={this.props.color}
        size={this.props.size}
        type={this.props.type}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </Button>
    );
  }
}

export default RaisedButton;
