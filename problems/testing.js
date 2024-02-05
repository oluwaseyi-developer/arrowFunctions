/*
function curriedSum(numArgs) {
  let numArr = [];
  let result = 0;
  return (num) => {
    numArr.push(num);
    
    if(numArr.length === numArgs) {

      for(let i = 0; i < numArr.length; i++) {
        let num = numArr[i];

        result += num;
      } 
      console.log(result);
      
    }
  }
}
*/





// This function takes an integer (how many numbers to sum) and returns a function
function curriedSum(numArgs) {
  // Define an empty array to store the numbers
  const numbers = [];

  // Define a function that closes over numArgs and numbers
  function _curriedSum(num) {
    // Append the number to the array
    numbers.push(num);

    // If the array length is equal to numArgs, sum the numbers and return the result
    if (numbers.length === numArgs) {
      let sum = 0;
      for (let n of numbers) {
        sum += n;
      }
      console.log(sum);
    }

    // Else, return the function itself
    return _curriedSum;
  }

  // Return the function
  return _curriedSum;
}



const sum = curriedSum(4); // returns a function
sum(5) // returns a function
sum(20) // returns a function
sum(30) // returns a function
sum(20); // => returns 75


const sums = curriedSum(3)(2)(1)(7); // => returns 10