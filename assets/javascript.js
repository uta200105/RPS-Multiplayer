$("#add").on("click", function (event) {
    event.preventDefault();
  
    var name = $("input").val().trim();
    $("input").val('');
    console.log(name)

  if (name === "") {
    alert("Please enter your name");
  } else {
    $("#playerOne").html(name);
    renderButtons();
  }
});