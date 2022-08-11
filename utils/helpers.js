module.exports = {
  format_date: (date) => {
    // Use methods built into the Date object 
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
};
