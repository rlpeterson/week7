$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();
    event.preventDefault();
  });
});
