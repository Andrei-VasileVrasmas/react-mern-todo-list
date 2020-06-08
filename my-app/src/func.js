import needle from 'needle'
let dayFound
let formattedDays = []

const selectedDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const findDay = (param1, param2) => {
  dayFound = param1.find(e => e.day === param2)
  return dayFound
}

export const formatDays = data => {
  for (var i = 0; i < selectedDays.length; i++) {
    findDay(data, selectedDays[i]);
    if (dayFound) {
      formattedDays.push({
        id: dayFound._id,
        name: dayFound.day,
        task: dayFound.toDo
      })
    } else {
      formattedDays.push({
        id: '',
        name: selectedDays[i],
        task: ''
      })
    }
  }

  return formattedDays
}

export const getFormattedDays = () => {
  return needle('get', 'http://localhost:5000/api/getData')
    .then(res => {
      formattedDays = [];
      formattedDays = formatDays(res.body);
      console.log('from server ',formattedDays);
      return formattedDays;
    })
    .catch(err => {
        console.error(err);
    });
}
