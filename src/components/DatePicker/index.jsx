import React from 'react';
import './index.css'

class DatePicker extends React.Component {
  render() {
    return (
      <div className="datePicker">
        <header>
          <button>{'<'}</button>
          <select></select>
          <button>{'>'}</button>
        </header>
      </div>
    );
  }
}

export default DatePicker;