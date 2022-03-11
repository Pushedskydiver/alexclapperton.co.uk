module.exports = (date) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const d = new Date(date);
  const day = days[d.getDay()];
  const year = d.getFullYear();
  const month = months[d.getMonth()];
  let dayNumber = d.getDate();

  if (dayNumber.toString().length < 2) {
    dayNumber = `0${dayNumber}`;
  }

  return `${day}, ${dayNumber} ${month} ${year}`;
}
