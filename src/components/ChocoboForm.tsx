import React from "react";
import uuid from 'uuid/v4'

interface NewChocobo {
  id?: string
  hp?: number
  attack?: number
  speed?: string
  colour?: string
}

const ChocoboForm: React.FC<NewChocobo> = (props) => {
  const [value, setValue] = React.useState<NewChocobo>(Object.assign({}, props));

  return (
    <form
      onSubmit={(event => {
        event.preventDefault();

        setValue(prevState => {
          prevState.id = uuid();
          return prevState;
        });

        //TODO: Store this in some place
      })}
    >

      <input
        name='hp'
        onChange={(event => {
          setValue(prevState => {
            prevState.hp = parseInt(event.target.value);
            return prevState;
          });
        })}
        defaultValue={value.hp}
      />
      <input
        name='attack'
        onChange={(event => {
          setValue(prevState => {
            prevState.attack = parseInt(event.target.value);
            return prevState;
          });
        })}
        defaultValue={props.attack}
      />
      <input
        name='speed'
        onChange={(event => {
          setValue(prevState => {
            prevState.speed = event.target.value;
            return prevState;
          });
        })}
        defaultValue={props.speed}
      />
      <input
        name='colour'
        onChange={(event => {
          setValue(prevState => {
            prevState.colour = event.target.value;
            return prevState;
          });
        })}
        defaultValue={props.colour}
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

ChocoboForm.defaultProps = {
  id: 'uuid',
  hp: 1,
  attack: 1,
  speed: 'A',
  colour: 'Yellow'
};

export default ChocoboForm;
