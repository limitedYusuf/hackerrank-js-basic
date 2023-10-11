function weekdayText(weekdays) {
   return function getText(number) {
       if (number < 0 || number >= weekdays.length) {
           throw new Error('Invalid weekday number');
       }
       return weekdays[number];
   };
}

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const getText = weekdayText(weekdays);

try {
   const number = 5;
   const result = getText(number);
   console.log(result);
} catch (error) {
   console.error(error.message);
}
