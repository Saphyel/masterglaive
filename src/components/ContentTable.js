import React from 'react';
import PropTypes from 'prop-types';

const ContentTable = (props) =>
  <div className="table-responsive">
    <h3>{props.description}</h3>
    <table className="table table-striped table-sm">
      {props.head.map((value, index) => {
        return (
          <tr key={value}>
            <th scope="row" className="col-sm-3">{value}</th>
            <td className="col-sm-9">{props.body[index]}</td>
          </tr>
        );
      })}
    </table>
  </div>;

ContentTable.propTypes = {
  description: PropTypes.string.isRequired,
  head: PropTypes.array.isRequired,
  body: PropTypes.array.isRequired,
};

export default ContentTable;
