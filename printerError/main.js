function printerError(s) {
    // your code
    let arr = Array.from(s)
    let err = 0;
    console.log('length', arr.length)
    arr.map(function(char) {
      if (char > 'm') err += 1;
    })
    console.log('num of errs', err);
    let output = err + '/' + arr.length;
    return output;
}

printerError('aaaa')
