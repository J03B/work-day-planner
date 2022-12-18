// Wrapping all code in a jQuery call to run once the browser renders all the html elements
$(document).ready(function () {
  // Save button event listener
  $('.saveBtn').on('click', function() {
    // Get values to save and put in localStorage
    var parentHour = $(this).parent();
    var eventData = $(parentHour).children('.description').val();
    localStorage.setItem(parentHour.attr('id'), eventData);

    // Show the alert, then hide it after 10 seconds
    $('.alert').addClass("show-alert");
    setTimeout(function() {
      $('.alert').removeClass("show-alert");
    }, 10000);
  });

  // function for updating if a time block is past, present, or future
  function pastPresentFuture() {
    // loop over time blocks then check time and validate
  }

  // once the page renders, and proactively, update the time blocks
  pastPresentFuture();
  setInterval(pastPresentFuture, 10000);

  // Load localStorage data for each hour block
  for (let i = 0; i < $('.container-lg').children().length; i++) {
    $(`#hour-${i+9} .description`).val(localStorage.getItem(`hour-${i+9}`));
  }

  // Displays the current date in the header of the page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
