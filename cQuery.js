/* 1. Selector */

var $ = function(str) {
  var selector = str.substr(0, 1);

  switch (selector) {
    case '#':
      console.log("Selector is Id");
      break;
    case '.':
      console.log("Selector is ClassName");
      break;
    default:
      console.log("Selector is TagName");
  }
}

$('div') // "Selector is TagName"
$('.container') // "Selector is ClassName"
$('#element01') // "Selector is Id"

/* 2. Event Listener */
