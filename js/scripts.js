$(document).ready(function () {
      event.preventDefault();
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
