/* 1. Selector */
var $ = function(str) {
  var selector = str.substr(0, 1);

  switch (selector) {
    case '#':
      console.log("Selector is Id");
      return document.getElementById(str.substr(1));
    case '.':
      console.log("Selector is ClassName");
      return document.getElementsByClassName(str.substr(1));
    default:
      console.log("Selector is TagName");
      return document.getElementsByTagName(str);
  }
}

$('div') // "Selector is TagName"
$('.container') // "Selector is ClassName"
$('#element01') // "Selector is Id"

/* 2. Event Listener */
