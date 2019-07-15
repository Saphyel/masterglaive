import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paragraph from "./Paragraph";

interface Content {
  title: string;
  subtitle: string;
  require: string;
  content: string[];
}

class AdvanceCard extends React.Component<Content> {
  render() {
    return(
      <Grid item sm={6} md={6} lg={6}>
        <Card>
          <CardHeader title={this.props.title} subheader={this.props.subtitle} />
          <CardContent>
            {this.props.require ? (
              <Typography color="secondary">
                Requires: {this.props.require}
              </Typography>
            ) : null}
            <Paragraph sentences={this.props.content} />
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default AdvanceCard;
