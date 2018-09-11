$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var FullName = $("input#name").val().toUpperCase();
    var Address = $("input#address").val();
    var ProductName = $("input#order").val();


    $(".name").text(FullName);
    $(".address").text(Address);
    $(".order").text(ProductName);

    $("#summary").show();

    event.preventDefault();
  });
});
