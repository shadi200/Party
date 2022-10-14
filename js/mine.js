//section home//
$(".open").click(function () {
  $("#leftMenu").animate({ width: "250px" }, 1000);
  $("#home-setting").animate({ marginLift: "250px" }, 1000);
});
$(".close").click(function () {
  $("#leftMenu").animate({ width: "0px" }, 1000);
  $("#home-setting").animate({ marginLift: "0px" }, 5000);
});
$("#leftMenu a").click(function () {
  var sectionId = $(this).attr("href");
  var positionOf = $(sectionId).offset().top;
  $("html,body").animate({ scrollTop: positionOf }, 1000);
});
//section Accordion//
$("#Accordion .Singer").click(function () {
  $(".downSlid").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});
//section count//
window.onload = function () {
  countDownToTime("31 Dec 2022 24:00:00");
};
function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let horse = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - horse * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - horse * 3600 - mins * 60
  );
  $(".days").html(`${days} D`);
  $(".hours").html(`${horse} H`);
  $(".minutes").html(`${mins} M`);
  $(".seconds").html(`${secs} S`);
  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}
/*textarea*/
var maxLength = 100;
$("textarea").keyup(function () {
  var length = $(this).val().length;
  var AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#number").text("your available character finished");
  } else {
    $("#number").text(AmountLeft);
  }
});
