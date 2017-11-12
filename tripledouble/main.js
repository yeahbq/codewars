function tripledouble(num1, num2) {
    var arr1 = num1.toString().split('').map(Number);
    var arr2 = num2.toString().split('').map(Number);
    var double = false;
    var triple = false;
    var repeatedNum = [];

    function checkTripleDouble(numb, match) {
        var count = 1;
        var currentNum;
        var previousNum;
        var selectVal;
        numb.forEach(function(x){
            currentNum = x;
            console.log('current number is',currentNum);
            console.log('previous number is',previousNum);            
            if (currentNum === previousNum) count++;
            else count = 1;
            console.log('count is ',count);
            previousNum = x;
            if (count == match && match == 3) {
                repeatedNum.push(currentNum);
                return triple = true;
            }
            if (count == match && match == 2) {
                repeatedNum.forEach(function(y) {
                    if (currentNum == y) return double = true;
                })
            }
        })
    }
    checkTripleDouble(arr1, 3);
    checkTripleDouble(arr2, 2);
    console.log('triple', triple, 'double', double);
    console.log('num1',num1, ' num2', num2);
    console.log('repeatedNum', repeatedNum);
    if (triple == true && double == true) return 1;
    else return 0;
}

console.log(tripledouble(10560002, 100));
