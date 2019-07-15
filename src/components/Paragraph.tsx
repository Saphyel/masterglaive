import React from "react";
import Typography from "@material-ui/core/Typography";
import {v4 as uuid} from 'uuid';

interface Text {
  sentences: string[];
}

class Paragraph extends React.Component<Text> {
  render() {
    return(
      <Typography variant="body1">
        {this.props.sentences.map(text =>
          <span key={uuid()}>{text}<br/></span>
        )}
      </Typography>
    );
  }
}

export default Paragraph;
