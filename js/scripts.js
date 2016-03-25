$(document).ready(function() {
  $("form#quizQuestions").submit(function(event){

  var question1answer = parseInt($("input:radio[name=question1answer]:checked").val());
  var question2answer = parseInt($("input:radio[name=question2answer]:checked").val());

  var totalScore = question1answer + question2answer

  if (totalScore < 3) {
    $(".quizResult1").show();
  }
  else if (totalScore < 5) {
    $(".quizResult2").show();
  }
  else {
    $(".quizResult3").show();
  }

  event.preventDefault();
  });
});
