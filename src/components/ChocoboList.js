import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { get, keys } from 'idb-keyval';

class ChocoboList extends React.Component {
  constructor() {
    super();
    this.state = {stable: []};
  }

  async setList() {
    let payload = [];
    const Ids = await keys();
    for (var i = 0; i < Ids.length; i++) {
      payload.push({id: Ids[i], chocobo: await get(Ids[i])})
    }
    return {stable: payload};
  }

  async componentDidMount() {
    this.setState(await this.setList());
    console.log(this.state);
  }

  render() {
    return (
      <div className="table-responsive">
        <h2>Stable of Chocobos</h2>
        <table id="chocolist" className="table table-striped table-sm">
          <TableHead
            options={['HP','Attack','Speed','Colour', 'Value', 'Manage']}/>
          <TableBody
            name="choco-content"
            list={this.state.stable}/>
        </table>
      </div>
    );
  }
}

export default ChocoboList;
