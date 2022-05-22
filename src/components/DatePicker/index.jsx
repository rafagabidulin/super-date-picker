import React from 'react';
import './index.css'

class DatePicker extends React.Component {
  static defaultProps = {
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  }
  render() {
    const { years, months, weekDays } = this.props;
    return (
      <div className="datePicker">
        <header>
          <button>{'<'}</button>
          <select>
            <option></option>
          </select>
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