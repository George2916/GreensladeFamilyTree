/*JAVASCRIPT FOR PHOTO[NAME].HTML AND PHOTODOCS[NAME].HTML*/

function twoPageFirstFlip() {
  var x = document.getElementById("p1of2");
  var y = document.getElementById("p2of2");
  x.style.display = "none";
  y.style.display = "block";
}

function twoPageUnflip() {
  var x = document.getElementById("p2of2");
  var y = document.getElementById("p1of2");
  x.style.display = "none";
  y.style.display = "block";
}

function twoPageFirstFlip2() {
  var x = document.getElementById("page1of2");
  var y = document.getElementById("page2of2");
  x.style.display = "none";
  y.style.display = "block";
}

function twoPageUnflip2() {
  var x = document.getElementById("page2of2");
  var y = document.getElementById("page1of2");
  x.style.display = "none";
  y.style.display = "block";
}

function twoPageFirstFlip3() {
  var x = document.getElementById("page1of2pages");
  var y = document.getElementById("page2of2pages");
  x.style.display = "none";
  y.style.display = "block";
}

function twoPageUnflip3() {
  var x = document.getElementById("page2of2pages");
  var y = document.getElementById("page1of2pages");
  x.style.display = "none";
  y.style.display = "block";
}

function threePageFirstFlip() {
  var x = document.getElementById("p1of3");
  var y = document.getElementById("p2of3");
  x.style.display = "none";
  y.style.display = "block";
}

function threePageSecondFlip() {
  var x = document.getElementById("p2of3");
  var y = document.getElementById("p3of3");
  x.style.display = "none";
  y.style.display = "block";
}

function threePageUnflip() {
  var x = document.getElementById("p3of3");
  var y = document.getElementById("p1of3");
  x.style.display = "none";
  y.style.display = "block";
}

function fivePageFirstFlip() {
  var x = document.getElementById("p1of5");
  var y = document.getElementById("p2of5");
  x.style.display = "none";
  y.style.display = "block";
}

function fivePageSecondFlip() {
  var x = document.getElementById("p2of5");
  var y = document.getElementById("p3of5");
  x.style.display = "none";
  y.style.display = "block";
}

function fivePageThirdFlip() {
  var x = document.getElementById("p3of5");
  var y = document.getElementById("p4of5");
  x.style.display = "none";
  y.style.display = "block";
}

function fivePageFourthFlip() {
  var x = document.getElementById("p4of5");
  var y = document.getElementById("p5of5");
  x.style.display = "none";
  y.style.display = "block";
}

function fivePageUnflip() {
  var x = document.getElementById("p5of5");
  var y = document.getElementById("p1of5");
  x.style.display = "none";
  y.style.display = "block";
}

function georgeGreensladeBorn1864Passport2Flip() {
  var x = document.getElementById("georgeGreensladeBorn1864Passport(2A)");
  var y = document.getElementById("georgeGreensladeBorn1864Passport(2B)");
  x.style.display = "none";
  y.style.display = "block";
}

function georgeGreensladeBorn1864Passport2SecondFlip() {
  var x = document.getElementById("georgeGreensladeBorn1864Passport(2B)");
  var y = document.getElementById("georgeGreensladeBorn1864Passport(2C)");
  x.style.display = "none";
  y.style.display = "block";
}

function georgeGreensladeBorn1864Passport2ThirdFlip() {
  var x = document.getElementById("georgeGreensladeBorn1864Passport(2C)");
  var y = document.getElementById("georgeGreensladeBorn1864Passport(2D)");
  x.style.display = "none";
  y.style.display = "block";
}

function georgeGreensladeBorn1864Passport2FourthFlip() {
  var x = document.getElementById("georgeGreensladeBorn1864Passport(2D)");
  var y = document.getElementById("georgeGreensladeBorn1864Passport(2E)");
  x.style.display = "none";
  y.style.display = "block";
}

function georgeGreensladeBorn1864Passport2FifthFlip() {
  var x = document.getElementById("georgeGreensladeBorn1864Passport(2E)");
  var y = document.getElementById("georgeGreensladeBorn1864Passport(2F)");
  x.style.display = "none";
  y.style.display = "block";
}

function georgeGreensladeBorn1864Passport2SixthFlip() {
  var x = document.getElementById("georgeGreensladeBorn1864Passport(2F)");
  var y = document.getElementById("georgeGreensladeBorn1864Passport(2G)");
  x.style.display = "none";
  y.style.display = "block";
}

function georgeGreensladeBorn1864Passport2Unflip() {
  var x = document.getElementById("georgeGreensladeBorn1864Passport(2G)");
  var y = document.getElementById("georgeGreensladeBorn1864Passport(2A)");
  x.style.display = "none";
  y.style.display = "block";
}

/* used to return to previous page */

function goingBack() {
  window.history.back();
}