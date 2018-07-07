import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) =>
  <div className="col">
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <select
      name={props.name}
      value={props.selectedOption}
      className="form-select form-control">
      {props.options.map(opt => {
        return (
          <option
            key={opt}
            value={opt}>{opt}</option>
        );
      })}
    </select>
  </div>;

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string,
};

export default Dropdown;
