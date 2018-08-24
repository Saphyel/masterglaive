import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Title from './Title';
import TableHeader from './TableHeader';
import TableContent from './TableContent';
import { get, keys } from 'idb-keyval';

class ChocoboList extends React.Component {
  constructor() {
    super();
    this.state = {stable: []};
  }

  async getItems() {
    let payload = [];
    const Ids = await keys();
    for (var i = 0; i < Ids.length; i++) {
      payload.push({id: Ids[i], chocobo: await get(Ids[i])})
    }
    return {stable: payload};
  }

  async componentDidMount() {
    this.setState(await this.getItems());
  }

  render() {
    return (
      <Grid item xs={12} sm={12} md={12}>
        <Paper>
          <Title message="Stable of Chocobos" />
          <Table>
            <TableHeader
              values={['HP', 'Attack', 'Speed', 'Colour', 'Value', 'Manage']}
            />
            <TableContent name="stable-list" list={this.state.stable} />
          </Table>
        </Paper>
      </Grid>
    );
  }
}

export default ChocoboList;
