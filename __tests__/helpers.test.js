const {format_date} = require('../utils/helpers');

test("format_date() returns a date string", () => {
  const date = new Date("2022-08-05 15:50:00");

  expect(format_date(date)).toBe("8/5/2022");
});
