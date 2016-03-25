$(document).ready(function() {
  $("form#name").submit(function(event){
    event.preventDefault();

    // $(".userName").text(userName.toUpperCase());
    // capitalized first letter in CSS file instead

    var userName = $("#nameInput").val();
    $(".userName").text(userName);
    $(".nameEntered").show();
    $("#quizQuestions").fadeIn("slow");
    $("#name").hide();
  })

  $("form#quizQuestions").submit(function(event){
  event.preventDefault();

  $("#name").hide();
  $("#quizQuestions").hide();

  var question1answer = parseInt($("input:radio[name=question1answer]:checked").val());
  var question2answer = parseInt($("input:radio[name=question2answer]:checked").val());
  var question3answer = parseInt($("input:radio[name=question3answer]:checked").val());
  var question4answer = parseInt($("input:radio[name=question4answer]:checked").val());
  var question5answer = parseInt($("input:radio[name=question5answer]:checked").val());

  var totalScore = question1answer + question2answer + question3answer + question4answer + question5answer

  if (totalScore <= 5) {
    $(".quizResult1").show();
    $("#takeQuizAgain").show();
    $(".nameEntered").hide();
  }
  else if (totalScore <= 10) {
    $(".quizResult2").show();
    $("#takeQuizAgain").show();
    $(".nameEntered").hide();
  }
  else if (totalScore <= 15) {
    $(".quizResult3").show();
    $("#takeQuizAgain").show();
    $(".nameEntered").hide();
  }
  else {
    $(".quizResult4").show();
    $("#takeQuizAgain").show();
    $(".nameEntered").hide();
  }
  });
});
