import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Paragraph from './Paragraph';

const BasicCard = props =>
  <Grid item xs={12} sm={12} md={4}>
    <Card>
      <CardHeader title={props.title}/>
      <CardContent>
        <Paragraph sentences={props.content} />
      </CardContent>
    </Card>
  </Grid>;

BasicCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired
};

export default BasicCard;
