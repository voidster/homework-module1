$(document).ready(function () {
  // Make only selectable activity cells clickable (exclude first column, headers, and "Not Available")
  $("td:not(:first-child)")
    .not(":contains('Not Available')")
    .css("cursor", "pointer");

  $("td:not(:first-child)").click(function () {
    // Ignore "Not Available" and category cells (first column)
    if ($(this).text() === "Not Available" || $(this).closest("thead").length) {
      return;
    }

    // Toggle highlight on clicked cell
    $(this).toggleClass("selected");
  });
});
