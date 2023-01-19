export default function dateTimeFullConvert(date) {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  const time = date.substring(11, 13) + date.substring(14, 16);
  const convertedTime = militaryTimeToStandard(time);
  return `${day}.${month}.${year} ${convertedTime}`;
}

function militaryTimeToStandard(fourDigitTime) {
  var hours24 = parseInt(fourDigitTime.substring(0, 2));
  var hours = ((hours24 + 11) % 12) + 1;
  var amPm = hours24 > 11 ? "pm" : "am";
  var minutes = fourDigitTime.substring(2);

  return hours + ":" + minutes + amPm;
}
