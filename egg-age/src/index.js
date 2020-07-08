import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Button from './Button';
import DaysOld from './DaysOld';
import DisplayPackageDate from './DisplayPackageDate';

const getDaysToToday = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const daysYearToDate = Math.floor(diff / (1000 * 60 * 60 * 24));
  return daysYearToDate;
}

const getDateObj = (month, day, year) => {
  const monthStr = month > 9 ? `${month}` : `0${month}`;
  const dayStr = day > 9 ? `${day}` : `0${day}`;
  const yearStr = year.toString();
  return `${yearStr}-${monthStr}-${dayStr}`;
}

const getDatePackaged = (days) => {
  let month = 1
  let dateObj = '';
  let daysInNextMonth = null;

  while (days > daysInNextMonth) {
    dateObj = getDateObj(month, 1, 2020);
    let daysPassed = moment(dateObj).daysInMonth();
    days -= daysPassed;
    daysInNextMonth = moment(dateObj).add(1, 'months').daysInMonth();
    month++;
  }
  days = days === 0 ? moment(dateObj).daysInMonth() : days

  const datePackaged = getDateObj(month, days, 2020);
  return moment(datePackaged).format('MMMM D, YYYY');
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      daysToToday: getDaysToToday(),
      daysSincePackaged: null,
      packagedDigit: null,
      datePackaged: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const daysOld = this.state.daysToToday - this.state.packagedDigit;
    this.setState({
      daysSincePackaged: daysOld,
      datePackaged: getDatePackaged(this.state.packagedDigit)
    })
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      packagedDigit: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>How Old Are Your Eggs?</h1>
        <Button
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          packagedDigit={this.state.packagedDigit}
        />
        <DaysOld
          daysSincePackaged={this.state.daysSincePackaged}
        />
        <DisplayPackageDate
          datePackaged={this.state.datePackaged}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));