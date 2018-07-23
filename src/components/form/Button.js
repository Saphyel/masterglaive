import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) =>
  <button
    type="button"
    className={props.colour}
    onClick={props.pk}>
    Delete
  </button>;

Button.propTypes = {
  colour: PropTypes.string.isRequired,
};

export default Button;
