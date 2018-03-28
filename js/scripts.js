

  $(document).ready(function () {

    function answerverifier(answer) {
      if (answer === "1") {
        return 1
      }
      else {
        return 0
      }
    }
    
    $("form").submit(function (event) {
      event.preventDefault();
      var css1 = answerverifier($("input[id='q1a2']:checked").val());
      var Csharp1 = answerverifier($("input[id='q1a1']:checked").val());
      var Android1 = answerverifier($("input[id='q1a3']:checked").val());
      var css2 = answerverifier($("input[id='q2a1']:checked").val());
      var Csharp2 = answerverifier($("input[id='q2a2']:checked").val());
      var Android2 = answerverifier($("input[id='q2a3']:checked").val());
      var css3 = answerverifier($("input[id='q3a3']:checked").val());
      var Csharp3 = answerverifier($("input[id='q3a2']:checked").val());
      var Android3 = answerverifier($("input[id='q3a1']:checked").val());
      var css4 = answerverifier($("input[id='q4a1']:checked").val());
      var Csharp4 = answerverifier($("input[id='q4a3']:checked").val());
      var Android4 = answerverifier($("input[id='q4a2']:checked").val());
      var css5 = answerverifier($("input[id='q5a1']:checked").val());
      var Csharp5 = answerverifier($("input[id='q5a2']:checked").val());
      var Android5 = answerverifier($("input[id='q5a3']:checked").val());
      resultcss = css1 + css2 + css3 + css4 + css5;
      resultCsharp = Csharp1 + Csharp2 + Csharp3 + Csharp4 + Csharp5;
      resultAndroid = Android1 + Android2 + Android3 + Android4 + Android5;

$("button#green").click(function () {
  $("body").removeClass();
  $("body").addClass("green-background");
});
$("button#yellow").click(function () {
  $("body").removeClass();
  $("body").addClass("yellow-background");
});
$("button#red").click(function () {
  $("body").removeClass();
  $("body").addClass("red-background");
});
$("button#blue").click(function () {
  $("body").removeClass();
  $("body").addClass("blue-background");
});
$("button#light").click(function () {
  $("body").removeClass();
  $("body").addClass("white-background");
});
$("button#dark").click(function () {
  $("body").removeClass();
  $("body").addClass("dark-background");
});
