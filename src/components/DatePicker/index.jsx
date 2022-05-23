import React from 'react';
import * as caledar from './calendar.js'
import './index.css'

class DatePicker extends React.Component {
  static defaultProps = {
    date: new Date(),
    years: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    onChange: Function.prototype
  }

  state = {
    date: this.props.date,
    currentDate: new Date(),
    selectedDate: null
  };

  get year() {
    return this.state.date.getFullYear();
  }

  get month() {
    return this.state.date.getMonth();
  }

  get day() {
    return this.state.date.getDate();
  }

  handlePrevMonthButtonClick = () => {
    const date = new Date(this.year, this.month - 1);
    this.setState({ date });
  }

  handleNextMonthButtonClick = () => {
    const date = new Date(this.year, this.month + 1);
    this.setState({ date });
  }

  handleSelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;
    const date = new Date(year, month);


    this.setState({ date });
  }

  handleDayClick = date => {
    this.setState({ selectedDate: date });
    this.props.onChange(date);
  }

  render() {
    const { years, months, weekDays } = this.props;
    const monthData = [
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()]
    ]
    return (
      <div className="datePicker">
        <header>
          <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

          <select
            ref={element => this.monthSelect = element}
            defaultValue={this.month}
            onChange={this.handleSelectChange}
          >
            {months.map((month, index) =>
              <option key={month} value={index}>{month}</option>
            )}
          </select>
          <select
            ref={element => this.yearSelect = element}
            defaultValue={this.year}
            onChange={this.handleSelectChange}
          >
            {years.map((year) => 
              <option key={year} value={year}>{year}</option>
            )}
          </select>
          <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
        </header>

        <table>
          <thead>
            <tr>
              {weekDays.map((day) => 
                <th key={day}>{day}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {monthData.map((week, index) =>
              <tr key={index}>
                {week.map((date, index) => date ? 
                  <td 
                    key={index}
                    onClick={() => this.handleDayClick(date)}
                  >{date.getDate()}</td>
                  :
                  <td key={index}></td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DatePicker;