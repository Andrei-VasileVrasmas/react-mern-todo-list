let dayFound
const selectedDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Fryday',
  'Saturday',
  'Sunday'
];

const findDay = (param1, param2) => {
   dayFound = param1.find(e => e.day === param2)
  return dayFound
}

export const formatDays = data => {
  let formattedDays = []

  for (var i = 0; i < selectedDays.length; i++) {
    findDay(data, selectedDays[i]);
    if (dayFound) {
      formattedDays.push({
        id:dayFound._id,
        name: dayFound.day,
        task: dayFound.toDo
      })
    } else {
      formattedDays.push({
        id:'',
        name: selectedDays[i],
        task: ''
      })
    }
  }

  return formattedDays
}
