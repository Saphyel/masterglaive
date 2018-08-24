import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paragraph from './Paragraph';

const AdvanceCard = props =>
  <Grid item xs={12} sm={12} md={4}>
    <Card>
      <CardHeader title={props.title} subheader={props.subtitle}/>
      <CardContent>
        <Typography color="textSecondary">
          {props.headline}
        </Typography>
        {props.requirement ? (
        <Typography color="secondary">
          Requires: {props.requirement}
        </Typography> ) : null}
        <Paragraph sentences={props.content} />
      </CardContent>
    </Card>
  </Grid>;

AdvanceCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  requirement: PropTypes.string,
  content: PropTypes.array.isRequired
};

export default AdvanceCard;
