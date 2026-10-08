// Day counter (only used on the Home page).
//
// It counts the days I actually worked on this site.
// Each day I make my first edit, I add that day's date to the list below.
//   - Format is "YYYY-MM-DD" (year-month-day), in quotes.
//   - Put a comma after every item except the last one.
//   - If I add the same date twice, it still counts as one day.
var DAYS_I_SHOWED_UP = [
  "2026-10-03",
  "2026-10-07",
  "2026-10-08"
];

try {
  var seen = [];
  for (var i = 0; i < DAYS_I_SHOWED_UP.length; i++) {
    var day = DAYS_I_SHOWED_UP[i];
    if (seen.indexOf(day) === -1) {
      seen.push(day);
    }
  }
  var count = seen.length;
  if (count < 1) { count = 1; }
  document.getElementById("day-count").textContent = count;
} catch (e) {
  // If anything goes wrong, the page still shows "Day 1".
}
