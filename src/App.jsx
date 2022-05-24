import React from 'react';
import DatePicker from './components/DatePicker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: null };
  }


  handleDateChange = date => this.setState({ date })
  render() {
    const { date } = this.state;

    return (
      <div>
        {date && <p>Выбранная дата: {date.toLocaleDateString()}</p>}
        <DatePicker onChange={this.handleDateChange} />
      </div>
    );
  }
}

export default App;
