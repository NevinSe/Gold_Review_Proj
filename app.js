


function isEvenOrOdd(arrayOfNumbers){
   let sum = 0;
   for(let i = 0; i < arrayOfNumbers.length; i++){
        sum += arrayOfNumbers[i];
   }
   if(sum % 2 == 0){
       return true;
   }
   else{
       return false;
   }

}


let numbers = [6,34354,756,252,73372,12552];
//let isEven = isEvenOrOdd(numbers);

//console.log("Is the sum of this array Even? " + isEven)




function isGreaterThan(arrayOfNumbers, numberToBeGreaterThan){
    for(let i = 0; i < arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i] > numberToBeGreaterThan){
            console.log(arrayOfNumbers[i]);
        }
   }
}

//isGreaterThan(numbers, 500);



function fizzBuzz(){
    for(let i = 0; i < 101; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("fizzbuzz");
        }
        else if(i % 3 == 0){
            console.log("fizz");
        }
        else if(i % 5 == 0){
            console.log("buzz");
        }
        else{
            console.log(i);
        }
        
    }
}

//fizzBuzz();



// 3.	Write a function that has one parameter: an array
// a.	The array that is passed in needs to be an array of numbers
// b.	Find the most frequent value in the array and return that value with the count


let numberArray = [4,5,4,3,8,5,6,4,23,9,8,8,8,8,8,3,3,3]
findMostFrequent(numberArray);


function findMostFrequent(anArray){
    anArray.sort()
    let mostFrequentNumber;
    let mostFrequentCounter=0;
    let counter = 1;

    for(let i = 0; i < anArray.length; i++){
        if(anArray[i] === anArray[i+1]){
            counter++;
        }
        else{
            if(mostFrequentCounter < counter){
                mostFrequentNumber = anArray[i];
                mostFrequentCounter = counter;
            }
            counter = 1;
        }
    }
    console.log(mostFrequentNumber + " " + mostFrequentCounter)
}

