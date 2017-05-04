 function findOutlier(integers) {
  let odd = [];
  let even = [];
  let arr = integers.map(x => {
    if (x % 2 == 0) {
      even.push(x);
    } else {
      odd.push(x);
    }
  })
  let N = null;
  if (odd.length < even.length) {
    N = odd.shift();
    console.log(N)
  } else {
    N = even.shift();
    console.log(N)
  }
  return N;
 }

 findOutlier([0,1,2])

//top suggested solution

// function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }
