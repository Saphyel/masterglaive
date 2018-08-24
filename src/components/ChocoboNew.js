import React from 'react';
import SingleInput from './form/SingleInput';
import Dropdown from './form/Dropdown';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import { set } from 'idb-keyval';
const uuidv1 = require('uuid/v1');

class ChocoboNew extends React.Component {
  async handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const payload = {
      hp: form.hp.value,
      attack: form.attack.value,
      speed: form.speed.value,
      colour: form.colour.value
    }
    await set(uuidv1(), payload);
    window.location.reload();
  }

  render() {
    return (
      <Grid item xs={12} sm={12} md={12}>
        <Paper>
          <Title message="Add a new chocobo" />
          <form className="new" onSubmit={this.handleSubmit}>
            <SingleInput
              inputType={'number'}
              title={'HP'}
              name={'hp'}
              placeholder={'2000'} />
            <SingleInput
              inputType={'number'}
              title={'Attack'}
              name={'attack'}
              placeholder={'1000'} />
            <Dropdown
              title={'Colour'}
              name={'colour'}
              options={['Red','Blue','Yellow','Black','Green']}
              selectedOption={'Blue'} />
            <Dropdown
              title={'Speed'}
              name={'speed'}
              options={['D','C','B','A','A+']}
              selectedOption={'Blue'} />
            <Button variant="raised" color="primary" type="submit">
              Add
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default ChocoboNew;
