import React from 'react';
import SingleInput from './form/SingleInput';
import Dropdown from './form/Dropdown';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Title from './Title';

class ChocoboNew extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hp: '',
      attack: '',
      colour: 'Red',
      speed: 'D'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewItem(
      this.state.hp,
      this.state.attack,
      this.state.colour,
      this.state.speed,
    );
  }

  render() {
    return (
      <Grid item xs>
        <Paper>
          <Title message="Add a new chocobo"/>
          <form className="new" onSubmit={this.handleSubmit}>
            <Grid
              container
              spacing={16}
              justify="center"
              alignItems="stretch"
              direction="row"
            >
              <SingleInput
                inputType={'number'}
                title={'HP'}
                name={'hp'}
                placeholder={'2000'}
                required={true}
                onChange={this.handleChange}
              />
              <SingleInput
                inputType={'number'}
                title={'Attack'}
                name={'attack'}
                placeholder={'1000'}
                required={true}
                onChange={this.handleChange}
              />
              <Dropdown
                title={'Colour'}
                name={'colour'}
                options={['Red', 'Blue', 'Yellow', 'Black', 'Green']}
                selectedOption={this.state.colour}
                onChange={this.handleChange}
              />
              <Dropdown
                title={'Speed'}
                name={'speed'}
                options={['D', 'C', 'B', 'A', 'A+']}
                onChange={this.handleChange}
                selectedOption={this.state.speed}
              />
              <Grid item xs={3} wrap='wrap'>
                <Button
                  size="large"
                  variant="raised"
                  color="primary"
                  type="submit"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default ChocoboNew;
