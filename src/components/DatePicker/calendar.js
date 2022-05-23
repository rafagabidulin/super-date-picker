const weekDays = 7;

export function getDaysInMonth(date) {

}

export function getDaysOfWeek(date) {
  
}

export function getMonthData(year, month) {
  const result = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getDaysOfWeek(date);
  let day = 1;

  for (let i = 0; i < (daysInMonth + monthStartsOn) / weekDays; i += 1) {
    result[i] = [];
    for (let j = 0; j < weekDays; j += 1) {
      result[i][j] = new Date(year, month, day += 1)
    }
  }


  // return [
  //   [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
  //   [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
  //   [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
  //   [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
  //   [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()]
  // ];

  return result;
}
