$(document).ready(function() {
  $("form#quizQuestions").submit(function(event){
  var question1answer = parseInt($("input:radio[name=answer]:checked").val());
  event.preventDefault();
  });
});
