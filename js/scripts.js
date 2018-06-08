function boop(input) {

  var results = [];
  for (var i = 0; i <= input; i++) {

    if (i % 3 == 0 ) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().match(/0/)) {
      results.push("Beep!")

    } else if (i.toString().match(/1/)) {
      results.push("Boop!")

    } else {
      results.push(i);
    }
  }
  alert(results);
}







$(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#number").val());
    boop(input);

  });
});
