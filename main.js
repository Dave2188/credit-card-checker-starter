// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

//an array of all invalid cards
const invalidBatch = [];

// this code validates the credit card numbers against the Luhn algorithm
const validateCred = (arr) => {
    const testArr = arr.slice(0);

    for (i = testArr.length - 2; i >= 0; i--) {

          if (testArr[i] * 2 > 9) {
                testArr[i] = testArr[i] * 2 - 9;

            }else if (testArr[i] * 2 < 9) {
                testArr[i] = testArr[i] * 2;
            };              
        
        i--;
    };
     
    const initialVal = 0;
    let sum = testArr.reduce((preVal,curVal) => preVal + curVal,initialVal);
    return sum % 10 === 0 ? true : false;
    
};
//test logs
 console.log(validateCred(valid1));
 console.log(validateCred(invalid2));
// console.log(validateCred(invalid3));
// console.log(validateCred(invalid4));
// console.log(validateCred(invalid5));


//this function takes in an array of cards and runs each through the validatecred() and returns new array of invalid cards.
const findInvalidCards = (arrOfCards) => {
      
    arrOfCards.forEach(card => {
       if (validateCred(card) === false) {invalidBatch.push(card)};
   });

   return invalidBatch;
};
findInvalidCards(batch);
//test log
//console.log(findInvalidCards(batch));

// this function checks the first number of the invalid cards to see which company they were issued from
const idInvalidCardCompanies = (arrOfInvalid) => { 
      const cardCompanies = []; 
      const amex = arrOfInvalid.some(card => card[0] === 3 ? cardCompanies.push('Amex') : false)
      const visa = arrOfInvalid.some(card => card[0] === 4 ? cardCompanies.push('Visa') : false)
      const mastercard = arrOfInvalid.some(card => card[0] === 5 ? cardCompanies.push('Mastercard') : false)
      const discover = arrOfInvalid.some(card => card[0] === 3 ? cardCompanies.push('Discover') : false)
        
     if (amex === false && visa === false && mastercard === false && discover === false) {
         return 'card company not found';
     }


    return cardCompanies;

}
//test
//console.log(idInvalidCardCompanies(invalidBatch));




