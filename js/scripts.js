var beep = function(input){
  if (input % 3 === 0) {
    return alert("Im Sorry Dave i vant do that");

 }

var num1 = [];
var num2 = [];



 if (input === 1000){
   return alert("1000");
 }
if(input >= 1) {
      arrayI.push(numerals[input]);
}


var total = total.join('')
$(".result").text(total)



}







$(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#number").val());
    beep(input);

  });
});
