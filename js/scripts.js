function boop(input) {

  var output = [];
  var nan = "Please Use Numbers Only"

    if (isNaN(input)) {
      alert(nan);
    }
  for (var i = 1; i <= input; i++) {
    if (i % 3 == 0 ) {
      output.push("I'm sorry Dave, I'm afraid I can't do that.");
    } else if (i.toString().match(/0/)) {
      output.push("Beep!")

    } else if (i.toString().match(/1/)) {
      output.push("Boop!")

    } else {
      output.push(i);
    }
  }
    alert(output);
}







$(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#number").val());
    var name = parseInt($("input#name").val());
    boop(input);

  });
});
