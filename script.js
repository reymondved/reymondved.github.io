// Day counter (only used on the Home page).
// Counts days since Oct 3, 2026 (Day 1). Months start at 0, so 9 means October.
try {
  var start = new Date(2026, 9, 3);
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var days = Math.round((today - start) / 86400000) + 1;
  if (days < 1) { days = 1; }
  document.getElementById("day-count").textContent = days;
} catch (e) {
  // If anything goes wrong, the page still shows "Day 1".
}
