(function() {
  /*
  1. Elements Seletor
   - cQuery('.className'): 클래스 명으로 요소를 찾는다.
   - cQuery('#id'): 아이디 값으로 요소를 찾는다.
   - cQuery('tagName'): 태그 명으로 요소를 찾는다.
   - cQuery(function(){}): 문서가 준비되었을 때 실행하는 함수를 안에 넣어준다.
  */

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
    return document.querySelectorAll(str);
  }

  function documentReady(func) {
    return document.addEventListener('DOMContentLoaded', func);
  }


  /* 2. Event Listener */

  this.$ = this.cQuery = cQuery;
}).call(this)
