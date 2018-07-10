import React from 'react';
import SingleInput from './form/SingleInput';
import Dropdown from './form/Dropdown';

class ChocoboNew extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const payload = {
      hp: form.hp.value,
      attack: form.attack.value,
      speed: form.speed.value,
      colour: form.colour.value
    }
    console.log('message', payload);
  }
  render() {
    return (
  <form className="new" onSubmit={this.handleSubmit}>
    <div className="form-group row">
      <SingleInput
        inputType={'number'}
        title={'HP: '}
        name={'hp'}
        placeholder={'2000'} />
      <SingleInput
        inputType={'number'}
        title={'Attack: '}
        name={'attack'}
        placeholder={'1000'} />
    </div>
    <div className="form-group row">
      <Dropdown
        title={'Colour: '}
        name={'colour'}
        options={['Red','Blue','Yellow','Black','Green']}
        selectedOption={'Blue'} />
      <Dropdown
        title={'Speed: '}
        name={'speed'}
        options={['D','C','B','A','A+']}
        selectedOption={'Blue'} />
    </div>
    <div className="form-group">
      <input
        type="submit"
        value="Add"
        className="btn btn-primary btn-block" />
    </div>
  </form>
    );
  }
}
export default ChocoboNew;
