$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    alert("Beginning");
    var FullName = $("#name").val();
    var FoodChoice = $("#food").val();
    var BandName = $("input:radio[name=band]:checked").val();

    $("#name").text(FullName);
    $("#food").text(FoodChoice);
    $("#music").text(BandName);

    $("#summary").show();
    event.preventDefault();
    alert("end");
  });
});
