//  feet to miles

function feetToMile(feet){
    var mile= feet/ 5280;
    var  outPut = Math.round(mile);
    return outPut;
}
var result = feetToMile(50000);
console.log(result);
  
// woodcalculator

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalCount= chairCount + tableCount + bedCount;
    return totalCount;
}
var total = woodCalculator(14,5,12)
console.log(total)
 

// tinyFriend

function tinyFriend(names){
    var small = names;
    for (var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName < small){
            small = currentName;
        }
    }
    return small;
}
var smallFriend = tinyFriend(['Nipun','Reza', 'Mp','Tasreef','Tasin']);
console.log(smallFriend);



// brickCalculator
// 25 floor building er jnno function

function brickCalculator(oneToTen, tenToTwenty, twentyToInfinity){
   var sum1 = oneToTen * 15 * 1000;
   
   var sum2 = tenToTwenty * 12 * 1000;
   
   var sum3 = twentyToInfinity * 10 * 1000;
  
   var total = sum1 + sum2 + sum3
    
    return total;
}
var totalNumber = brickCalculator(10,10,5)
console.log(totalNumber);