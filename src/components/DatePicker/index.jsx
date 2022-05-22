import React from 'react';
import './index.css'

class DatePicker extends React.Component {
  render() {
    return (
      <div className="datePicker">
        <header>
          <button>{'<'}</button>
          <select></select>
          <select></select>
          <button>{'>'}</button>
        </header>

        <table>
          <thead>
            <tr>
              <td></td>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default DatePicker;