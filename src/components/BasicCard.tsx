import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Paragraph from "./Paragraph";

interface Content {
  title: string;
  content: string[];
}

class BasicCard extends React.Component<Content> {
  render() {
    return(
      <Grid item sm={6} md={6} lg={6}>
        <Card>
          <CardHeader title={this.props.title} />
          <CardContent>
            <Paragraph sentences={this.props.content} />
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default BasicCard;
