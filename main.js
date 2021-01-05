const customCalendar = (date) => {
  // Convert the timestamp to actual date
  let newDate = new Date(date);

  /*
  Difference between Jan to Apr is 3 months
  that's why set month with decreasing 3
  */
  newDate.setMonth(newDate.getMonth() - 3);

  /*
  Difference between 12:00 to 08:00 is 8 hourse
  that's why set hourse with decreasing with 8
  */
  newDate.setHours(newDate.getHours() - 8);

  // Return the object
  return {
    year: newDate.getFullYear(),
    month: newDate.getMonth() + 1,
    day: newDate.getDate(),
    hour: newDate.getHours(),
  };
};

// Check it with console log
console.log(customCalendar(1585708200000));
