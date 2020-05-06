$(document).ready(function () {
  $(".socialmediasContainer").hide();

  $("#logos").click(function () {
    $(".socialmediasContainer").slideToggle("slow");
  });
});
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function openFormMyshotel() {
  document.getElementById("myFormMyshotel").style.display = "block";
}
function closeFormMyshotel() {
  document.getElementById("myFormMyshotel").style.display = "none";
}
function openFormSpecialhotel() {
  document.getElementById("myFormSpecialhotel").style.display = "block";
}
function closeFormSpecialhotel() {
  document.getElementById("myFormSpecialhotel").style.display = "none";
}
function openFormCityhotel() {
  document.getElementById("myFormCityhotel").style.display = "block";
}
function closeFormCityhotel() {
  document.getElementById("myFormCityhotel").style.display = "none";
}
function openFormLyxhotel() {
  document.getElementById("myFormLyxhotel").style.display = "block";
}
function closeFormLyxhotel() {
  document.getElementById("myFormLyxhotel").style.display = "none";
}
