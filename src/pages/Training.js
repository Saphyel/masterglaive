import React from 'react';
import Grid from '@material-ui/core/Grid';
import ContentTable from '../components/ContentTable';
import training from '../data/training.json';

const Training = () =>
  <main>
    <Grid container spacing={8} alignItems="stretch" justify="center">
      {training.map(train =>
        <ContentTable
          key={train.id}
          title={train.title}
          headers={train.headers}
          contents={train.contents}
        />
      )}
    </Grid>
  </main>;

export default Training;
