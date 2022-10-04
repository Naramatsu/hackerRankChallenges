export function timeConversion(s) {
  const timeIndicator = s.slice(s.length - 2);
  const timeValue = s.slice(0, s.length - 2).split(':');

  if (timeIndicator === 'AM' && timeValue[0] === '12') {
    timeValue[0] = '00';
  }
  if (timeIndicator === 'PM' && timeValue[0] !== '12') {
    timeValue[0] = parseInt(timeValue[0]) + 12;
  }
  return timeValue.join(':');
}
