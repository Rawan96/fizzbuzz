'use strict';

function fizzbuzz(num) {
  // write your code here
  let result 
    if(num % 3 === 0 && num % 5 === 0){
      result = "fizzbuzz"
    } else if( num % 5 === 0){
      result =  "buzz"
    } else if(num %3 ===0 ){
      result =  'fizz'
    } else{
    result = num
    }
  return result
  }


console.log(fizzbuzz(4))

module.exports = fizzbuzz;
