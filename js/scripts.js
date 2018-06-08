




// interface logic//
$(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
debugger;
    var input = parseInt($("input#number").val());
    beep(input);

  });
});
