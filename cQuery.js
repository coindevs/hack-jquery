!function() {
  /* 1. Elements Seletor */
  var cQuery = function(arg) {
    var type = typeof arg;

    if (type === 'string') {
      return elementSelector(arg);
    }
    if (type === 'function') {
      return documentReady(arg);
    }

    return [arg];
  }

  function elementSelector(str) {
    var selector = str.substr(0, 1);

    if (selector === '#') {
      return document.getElementById(str.substr(1));
    }
    if (selector === '.') {
      return document.getElementsByClassName(str.substr(1));
    }

    return document.getElementsByTagName(str);
  }

  function documentReady(func) {
    return document.addEventListener('DOMContentLoaded', func);
  }


  /* 2. Event Listener */




  this.$ = cQuery;
}.call(this)

var log = console.log;
$(function(){ log('hello')});

log($('div'));
log($('.container'));
log($('#element01'));
