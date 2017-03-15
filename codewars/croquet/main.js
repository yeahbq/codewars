//Answer and work goes here

function openOrSenior(data){
var mapped = data.map(function(input) {
  let age = input[0];
  let handicap = input[1];
  //console.log('age: ', age, 'handicap: ', handicap, 'input: ', input);
  if (age >= 55 && handicap > 7) {
    return input = "Senior";
  }
  else return input = "Open";
  });

  return mapped;
}

Test.assertSimilar(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
Test.assertSimilar(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]),['Open', 'Open', 'Open', 'Open'])
Test.assertSimilar(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
