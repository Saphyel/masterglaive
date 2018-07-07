import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) =>
  <div className="col">
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <input
      className="form-input form-control"
      name={props.name}
      type={props.inputType}
      value={props.content}
      placeholder={props.placeholder} />
  </div>;

SingleInput.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};

export default SingleInput;
