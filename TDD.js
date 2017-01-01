function test(c, j) {
  if (c == j) {
    console.log(true);
  } else {
    console.log("cQuery result:");
    console.log(c);
    console.log("jQuery result:");
    console.log(j);
  }
}

test(cQuery('div'), jQuery('div'));
test(cQuery('.container'), jQuery('.container'));
test(cQuery('#element01'), jQuery('#element01'));
