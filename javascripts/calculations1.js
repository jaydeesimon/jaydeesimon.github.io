(function() {
  console.log('CALCULATIONS 1 STARTING')
  var sum = 0;
  for (var i = 0; i < 1000000000; i++) {
    if (i % 1000000 == 0) {
      console.log("CALCULATIONS 1 Working " + i);
    }
    sum = sum + i;
  }
  console.log(sum);
  console.log('CALCULATIONS 1 DONE')
})();
