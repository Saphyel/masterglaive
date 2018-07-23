import React from 'react';
import Button from './form/Button';
import { del } from 'idb-keyval';

class TableBody extends React.Component {
  async deleteItem(id) {
    await del(id);
    window.location.reload();
  }
  render() {
    return (
      <tbody id={this.props.name}>
        {this.props.list.map(opt => {
          return (
            <tr key={opt.chocobo.hp}>
              <td>{opt.chocobo.hp}</td>
              <td>{opt.chocobo.attack}</td>
              <td>{opt.chocobo.speed}</td>
              <td>{opt.chocobo.colour}</td>
              <td>{opt.chocobo.attack}</td>
              <td>
                <Button
                  pk={() => this.deleteItem(opt.id)}
                  colour="btn btn-danger"
                  />
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
