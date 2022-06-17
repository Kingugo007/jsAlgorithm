// function summation(number){
//     let sum = 0;
//     for(let i = 1; i <= number; i++ ){
//         sum = sum + i;
//     }
//     console.log(sum)
// }

// summation(4);

// function mean(numbers){
//  let total =  numbers.reduce((a, b) => a + b);
//  let x = numbers.length;
//  console.log((total/x));
// }

// mean([1, 2, 3]);

// function RemovefirstandLast(text){
//   let arrtext = text.split('');
//   arrtext.shift();
//   arrtext.pop();
//   console.log(arrtext.join(''))
// }

// RemovefirstandLast("rmoveb")


// function sumOfPositive(numbers){
//   let newArr = [];
//   if(numbers.length > 0){
//   for(let i = 0; i < numbers.length; i++){
//       if(numbers[i] >= 0){
//         newArr.push(numbers[i])
//       } 
//   }
//   let sum = newArr.reduce((a,b) => a + b);
//   console.log(sum);
// }
// else {
//     console.log(0)
// }

// }

// sumOfPositive([])


//smiple calculator algorithm
// function Operation(n, x, y){
//     if(n  === '-'){
//     console.log(x - y);
//     }
//     if(n === '*'){
//         console.log(x * y);
//     }
//     if(n === '+'){
//         console.log(x + y);
//     }
//     if(n === '/'){
//         console.log(x / y)
//     }
// }
// Operation("*", 2, 8);
// Operation('-', 10, 2);
// Operation('+', 10, 2);
// Operation('/', 10, 2);


// squaring each digit in an array
// function squareDigit(digi){
// let result = [];
//   let digiStr = digi.toString();
//   let digiStrArr = digiStr.split('');
//   for(const num of digiStrArr){
//      result.push(num * num) 
//   }
//   console.log(parseInt((result).join('')))
// }
// squareDigit(9119)


// summing two array
// function sumArray(arr1, arr2){
//     newArray = arr1.concat(arr2);
//     console.log(newArray.reduce((a,b) => a + b));
// }
// sumArray([1,3,3], [1,2,3])


// announce the number converting numbers to its equivalent string Example 1 = one
// function announce(nums){
//   let stringNum = [];
//   let newNums = nums.toString().split('');
//   for(const newNum of newNums){
//     if(newNum === "1"){
//         stringNum.push('one')
//     }
//     if(newNum === "2"){
//         stringNum.push('two')
//     }
//     if(newNum === "3"){
//         stringNum.push('three')
//     }
//     if(newNum === "4"){
//         stringNum.push('four')
//     }
//     if(newNum === "5"){
//         stringNum.push('five')
//     }
//     if(newNum === "6"){
//         stringNum.push('six')
//     }
//     if(newNum === "7"){
//         stringNum.push('seven')
//     }
//     if(newNum === "8"){
//         stringNum.push('eight')
//     }
//     if(newNum === "9"){
//         stringNum.push('nine')
//     }
//     if(newNum === "0"){
//         stringNum.push('zero')
//     }
//     if(newNum === "-"){
//         stringNum.push('negative')
//     }
//     if(newNum === "+"){
//         stringNum.push('positive')
//     }
//   }
// return stringNum;
// }
// console.log(announce(-1234567890).join(' '));



// sum two smallest numbers
// const smallestNum = (num) => {
//     const [ f , l] = num.sort((a, b) => a - b);
//     return f + l;
// }
//  console.log(smallestNum([111,10,41,40,511,421,100]))




//write a function that split and array into groups the length of size
// const chunk = (arr, size) => {
//     let newArr = [];
//     while(arr.length > 0){
//         newArr.push(arr.splice(0, size));
//     }
//     return newArr;
// }
// console.log(chunk([1,4,3,4,3,2], 4))

// Anagram check
// const Anagram = (stringA, stringB) => {
//     stringA = stringA.toLowerCase().replace(/[\W_]+/g, '');
//     stringB = stringB.toLowerCase().replace(/[\W_]+/g, '');
//     if( stringA.length !== stringB.length){
//         console.log('not anagram because of length is not equal')
//         return false;
//     } else{
//         let str1 = stringA.split('').sort().join('');
//         let str2 = stringB.split('').sort().join('');
//         if(str1 === str2){
//             console.log("its anagram");
//             return true;
//         }
//         else {
//             console.log("not anagram");
//             return false;
//         }
//         }
//     }
//     Anagram("ugoboss", "bossug!")


// function steps(n) {
//  for( let i = 0; i <= n; i++){
//     let step = "";
//     step += "#".repeat(i);
//     step += " ".repeat(n - 1);
//     console.log(step)
//   }     
// }


//pyramid algorithms
// function pyramid(n){
//     for(let i = 1; i <= n; i++){
//         const padding = " ".repeat(n - i);
//         const hashes = "#".repeat(i * 2 - 1);
//         console.log(padding + hashes + padding);
//     }
// }

//find the unique number
// function UniqueNum(arr){
//     for(let i = 0; i < arr.length; i++){
//         let num = arr[i];
//         let nextNum = arr[i + 1];
//         let nextNum2 = arr[i + 2];
//         if(num !== nextNum && nextNum === nextNum2){
//             return console.log(num)
//          }
//         if(num !== nextNum){
//           return  console.log(nextNum);
//         }

//     }
// }
// UniqueNum([1,1,1,1,1,2,1,1])
// UniqueNum([0,0,0.55,0,0]);
// UniqueNum([7,0,0,0,0,0,]);
// UniqueNum([2,3,2,2,2,2,2]);
// UniqueNum([2,2,2,2,2,2,4]);
// UniqueNum([2,2,2,2,2,6,2]);


///sum the range of two numbers in any arr
// function Numbers(arr){
//     const newArr = []
//  if(arr[0] < arr[1]){
//           for(let i = arr[0]; i <= arr[1]; i++){
//        newArr.push(i);
//      }
//     const sumArr = newArr.reduce((a, b) => a + b);
//     console.log(sumArr)
//  }
//  if(arr[0] > arr[1]){
//     for(let i = arr[0]; i >= arr[1]; i--){
//     newArr.push(i);
// }
// const sumArr = newArr.reduce((a, b) => a + b);
// console.log(sumArr)
// }
// }
// Numbers([5, 10]);
// Numbers([4, 1]);



//Getting the difference between two array
// function DiffArr(arr, arr2){
//  const newArr = [];

//        for(let j = 0; j < arr2.length; j++){
//           if(!arr.includes(arr2[j])){
//             newArr.push(arr2[j]) 
//           } 
//         }

//         for(let i = 0; i < arr.length; i++){
//             if(!arr2.includes(arr[i])){
//                 newArr.push(arr[i])
//             }
//         }

//     console.log(newArr)         
//   }
// DiffArr([1,2,3,4,5,10,11,12], [1,2,4,6,7,5,10]);
// DiffArr(['boy', 'girl', 'cat'], ['boy', 'goat', 'girl','cow'])


//find the longest word in an array
// function findLongestWordLength(str) {
//         str = str.split(' ');
//         const strLenObj = {}
//         for(const strLen of str){
//           strLenObj[strLen] = strLen.length;
//         }
//         let arrObjVal = Object.values(strLenObj);
//         arrObjVal = arrObjVal.sort((a, b) => b - a)     
//         console.log(arrObjVal[0])
//     }
//     findLongestWordLength("The quick brown fox jumped over the lazy dog")
//     findLongestWordLength("The quick brown fox jumped over the lazy dog")    
//     findLongestWordLength("May the force be with you")    
//     findLongestWordLength("Google do a barrel roll")    
//     findLongestWordLength("What is the average airspeed velocity of an unladen swallow")    
//     findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")



// function tribonacci(signature,n){
//     if(n === 0){
//       return signature = []
//     }
//     if( n === 1){
//       let newSignature = signature.shift()
//       return signature = [newSignature]
//     }
//     else if( n >= 3){
//      for(let i = 0; i < n - 3 ; i++){
//       let newSignature = signature.slice(i, 3 + i).reduce((a, b) => a + b)
//        signature.push(newSignature)
//      }
//        return signature
//     }
//    else if ( n === 2){
//      return signature.pop()
//    }
// }
//  console.log(tribonacci([1,1,1],10))
//  console.log(tribonacci([300,200,100],0))
//  console.log(tribonacci([1,1,1],1))



// function missingNumber(numArr) {
//     let missingArr =[];
//     let a = 9 // Math.max(...numArr);
//     let b = 1 //Math.min(...numArr);
//     for(let i = b; i <= a; i++){
//        if(numArr.indexOf(i) < 0){
//          missingArr.push(i)
//        }
//     }
//     if(missingArr.length === 1){
//         return missingArr[0]
//     }
//      if(missingArr.length <= 0){
//          missingArr = false
//      }
//      return missingArr
//     }
// console.log(missingNumber([1,2,3,4,6,7,8,9]))
// console.log(missingNumber([1,2,3,4,5,6,8]))
// console.log(missingNumber([1,2,3,4,5,6,7,8,9]))


// function numSwap(number) {
// let numArr = [];
// number = number.toString().split('');
// for(let i = 0; i <= number.length; i++){
//     console.log(i)
//     let newNum = number.splice(0, 2).reverse().join('')
//     numArr.push(newNum);
// }
//  return numArr.join('')
// }
// console.log(numSwap(1234))
// console.log(numSwap(432156))



// function increment(arr, value) {
//     arr.map((number) => {
//       number.val = number.val + value;
//     })
//     return arr
//   }
//   console.log(increment([{ val: 1 }, { val: 2}, { val: 3 }], 2))



// algorithm for facebook likes
// function likes(names) {
//   if(names.length <= 0){
//     return 'no one likes this'
//   }
//   if(names.length === 1){
//     return names[0]  + ' likes this'
//   }
//   if(names.length === 2){
//     return names[0] +', '+ names[1] + ' likes this'
//   }
//   if(names.length === 3){
//     return names[0] +', '+ names[1] + ' and ' + names[2] + ' likes this'
//   }
//   if(names.length > 3){
//     let twoLike = names.splice(0, 2);
//     return twoLike.join(', ') + ' and ' + names.length + ' others like this'
//   }
// }
//console.log(likes([])) // 'no one likes this');
//console.log(likes(['Peter'])) //'Peter likes this');
//console.log(likes(['Jacob', 'Alex'])) // 'Jacob and Alex like this');
//console.log(likes(['Max', 'John', 'Mark'])) // 'Max, John and Mark like this');
//console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) //'Alex, Jacob and 2 others like this');
//console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'ugo', 'king']))


// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []
//---------------- SOLUTION -----------------/
// function inArray(array1, array2){
//   let newArr = []
//   for(let i = 0; i < array1.length; i++){
//     for(let j = 0; j < array2.length; j++){
//       if(array2[j].includes(array1[i])){
//         newArr.push(array1[i])
//       }
//     }    

//   }

//   let words = new Set(newArr);
//   return ([...words]).sort()
// }



// Check for uniqueness
// const findNonUnique = (arr) => {
// let newArr = [];
// for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//         if( arr[i] == arr[j]){
//             newArr.push(arr[i])
//         }
//     }
// }
// return [...new Set(newArr)]
// }
// console.log(findNonUnique([2, 1, 2, 5]))
// console.log(findNonUnique([1, 2, 2, 3, 3, 3]))
// console.log(findNonUnique([1, 2, 3, 4, 5]))
// console.log(findNonUnique([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]))
// console.log(findNonUnique([1]))


// grading student algorithm
// function groupGrades(grades){
//     let result = { failed: 0, passed: 0, exceptional: 0}
//     for(let i = 0; i < grades.length; i++){
//         if( grades[i] < 50){
//             result.failed++
//         }
//         if( grades[i] >= 50 ){
//             result.passed++
//         }
//         if( grades[i] >= 90){
//             result.exceptional++
//         }
//     }
//     return result;
// }
// console.log(groupGrades([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]))
// console.log(groupGrades([70, 85, 90, 95, 96, 97, 98, 99]))
// console.log(groupGrades([33, 80, 78, 89, 70, 49, 40, 43, 40, 33]))


// counting vowels and consonants in a string
// const vowelsVsConsonants = (word) => {
//   let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//   let vowelCount = 0;
//   let consonantCount = 0;
//   for(let letter of word){
//      if(vowels.includes(letter)){
//          vowelCount++
//      }
//      else{
//          consonantCount++
//      }
//   }
//   if(vowelCount > consonantCount){
//       return "vowels wins"
//   }
//    if(vowelCount === consonantCount){
//       return "draw"
//   }
//    if(vowelCount < consonantCount){
//       return "consonant wins"
//   }
// }
// console.log(vowelsVsConsonants("hippopotamus"))
// console.log(vowelsVsConsonants("pneumonoultramicroscopicsilicovolcanoconiosis"))


// abbreviating fullname
// const abbreviate = (words) => {
//  let newWord = []
//  words = words.split(" ")
//  let abbreviateWords = words.splice(1);
//  let name = "ugoboss"
//  //[add, boy]
// for(let letter of abbreviateWords){
//     newWord.push(`${letter[0].toUpperCase()}.`)
// }
//  return words[0] + " " +newWord.join('')
// }




// function abbreviate(fullName) {
//   const wordArr = fullName.split(" ");
//   if (wordArr.length === 1) {
//     return fullName;
//   }
//   let abbreviation = wordArr[0] + " ";
//   for (let i = 1; i < wordArr.length; i++) {
//     const word = wordArr[i];
//     abbreviation += word[0] + ".";
//   }
//   return abbreviation;
// }


// const abbreviate = (words) => {
//  words = words.split(' ')
//  let newArr = [];
//  let lastWord = words.pop()
// for(let letter of words){
//   newArr.push(`${letter[0]}.`)  
// }
// return newArr.join('') + " " +lastWord
// }
// console.log(abbreviate("Mary Jane"))


// const classifyLetters = (word) => {
// let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
// let vowelCount = [], consonantCount = []
// for(let letter of word){
//   if(vowels.includes(letter)){
//     vowelCount.push(letter)
//   } else{
//     consonantCount.push(letter)
//   }
// }
// return { vowelCount, consonantCount}
// }
// console.log(classifyLetters("abcdefabcdef"))


// const classifyNumbers = (numbers) => {
// let odd = [], even = [], units = [], tens = [], others = [], hunders = []
// for(let number of numbers){
//   if(number % 2 === 0){
//     even.push(number)
//   }
//   if(number % 2 !== 0){
//     odd.push(number)
//   }
//   if(number > 0 && number < 10){
//     units.push(number)
//   }
//   if(number >= 10 && number < 100 ){
//     tens.push(number)
//   }
//   if(number >= 100 && number < 1000){
//     hunders.push(number)
//   }
//   if(number >= 1000 || number === 0){
//     others.push(number)
//   }
// }
// return { odd, even, units, tens, hunders, others}
// }


// console.log(classifyNumbers([ 90_000,
//         100_000,
//         100_000,
//         1_000_000,
//         10_000_000,
//         100_000_000,
//         1_000_000_000]))


// Convert numbers to roman figure
// const romanToDecimal = (number) => {
//  let romanFig = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1}
//  let roman = ''
//  for(let fig in romanFig){
//    while(number >= romanFig[fig]){
//      roman += fig
//      number = number - romanFig[fig]
//    }
//  }
//  return roman
// }
// console.log(romanToDecimal(1944))

// 2D array transpose
// function transposeArray(array){
//     var newArray = [];
//     for(var i = 0; i < 5; i++){
//         newArray.push([]);
//     };
//     for(var i = 0; i < 3; i++){
//         for(var j = 0; j < 5; j++){
//             newArray[j].push(array[i][j]);
//         };
//     };
//     return newArray;
// }
// console.log(transposeArray([
//   [5, 12, 17, 9, 3],
//   [13, 4, 8, 14, 1],
//   [9, 6, 3, 7, 21],
// ]))


// Binary reverse
// function BinaryReversal(str) {
//   const binaryValue = Number(str).toString(2);
//   const paddingLength = binaryValue.length % 8 === 0 ? 0 : 8 - binaryValue.length % 8
//   const paddedReversedBinaryValue = [
//     ...Array(paddingLength).fill(0), 
//     ...binaryValue]
//     .reverse()
//     .join('');
//   return parseInt(paddedReversedBinaryValue,2);
// }
// console.log(BinaryReversal("213"))


// const numOfvalue = (word, a) => {
//   let newArr = []
//   let idx = word.indexOf(a)
//   while (idx != -1) {
//     newArr.push(idx)
//     idx = word.indexOf(a, idx + 1)
//   }
//   return newArr
// }
// console.log(numOfvalue([1, 2, 1, 4, 1], 2))

// Representing alphabet with their number
// const alphabetPosition = (text) => {
// const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
// let strNum = ''
// text = text.toLowerCase().replace(/[^a-zA-Z]+/g, '').split('')
//  text.map((letter) => {
//   strNum += alphabet.indexOf(letter) + 1
// })
// return strNum
// }

// console.log(alphabetPosition("///abc,z"))


// const vowelCount = (word) => {
// word = word.split('')
// let vowel = "aeiouAEIOU".split('')
// let count = 0
// for(let i = 0; i < word.length; i++){
//   for(let j = 0; j < vowel.length; j++){
//     if(word[i] === vowel[j]){
//       count++
//     }
//   }
// }
// return count
// }
// console.log(vowelCount("aboyooooo"))


// const repeatStr = (str, n) => {
// let repeat = "";
// for(let i = 0; i < n; i++ ){
//   repeat += str
// }
// return repeat
// }

// console.log(repeatStr("ab", 2))


// const maxChar = (str) => {
// let charObj = {}
// str = str.split('')
// let initialValue = 0
// let maxStr = ""
// let newArr = []

// for(let char of str){
//   if(charObj[char]){
//     charObj[char]++
//   }
//   else{
//     charObj[char] = 1
//   }
// }

// let highestStr = Math.max(...Object.values(charObj))
// console.log(highestStr)
// for(let letter in charObj){
//   if(charObj[letter] === highestStr){
//       //initialValue = charObj[letter]
//       newArr.push(letter)
//   }
  
// }
// return newArr
// }

// console.log(maxChar("oodgiogguuu"))


// const longestStr = (array, a) => {
// let newWord = []
// for(let i = 0; i < array.length - 1; i++){
//   newWord.push(array.slice(i, i+a).join(''))
// }
// console.log(newWord)
// let longest = newWord.reduce((prev, current) => current.length > prev.length ? current : prev)
// return longest
// }
// console.log(longestStr(["boy", "man", "girl", "woman", "glory"], 3))




// const findNonUnique = (arr) => {
// let newArr = []

// for(let i = 0; i < arr.length; i++ ){
//     for(let j = i +1; j < arr.length; j++){
//         if(arr[i] == arr[j]){
//             newArr.push(arr[j])
//         }
//     }
// }

// return [...new Set(newArr)]

// }
// console.log(findNonUnique([2, 1, 2, 5, 1,5,2]))



// const groupLetters = (str) => {
// let vowels = "aeiouAEIOU".split('')
// str = str.split('')
// let v = []
// let c = []

// for(let letter of str){
//  if(vowels.includes(letter)){
//      v.push(letter)
//  } else{
//      c.push(letter)
//  }
// }
// let vc = v.concat(c)
// return vc.join('')
// }

// console.log(groupLetters("AqEwIyOnUm"))


// const abbreviate = (str) => {
// str = str.split(' ')
// let fn = str.slice(1);
// let abbName = []

// for(let abb of fn){
//   abbName.push(`${abb[0]}.`)
// }

// return str[0] + " " + abbName.join('')

// }

// console.log(abbreviate("James Jonah Jameson"))


// const abbreviate = (str) => {
// str = str.split(' ')
// let ln = str.pop()
// let abbName = []
// for(let abb of str){
//   abbName.push(`${abb[0]}.`)
// }
// return abbName.join('') + " " + ln
 // }
// console.log(abbreviate("James Jonah Jameson"))



// const people = [
//   {name:'Sarah', gender:'female', age:25},
//   {name:'Tom', gender:'male', age:18},
//   {name:'Tim', gender:'male', age:65},
//   {name:'Kim', gender:'female', age:58},
//   {name:'Timy', gender:'male', age:15},
//   {name:'Kimy', gender:'female', age:15},
//   {name:'Timg', gender:'male', age:30},
//   {name:'Kimg', gender:'female', age:25}
// ];

// const females = people.filter(person => person.gender === "female" && person.age <= 25)
// let countFemale = females.reduce((prev, next) => prev + next.age, 0)

// const males = people.filter(person => person.gender === "male" && person.age <= 25)
// let countmale = males.reduce((prev, next) => prev + next.age, 0)

// console.log({ countmale, countFemale})
// console.log(females)


// const language = {
//   "ia" : "we",
//   "tr" : "you",
//   "jh" : "love",
//   "lk" : "my"
// }

// const lang = (words) => {
// words = words.split(' ')
// let newArr = []
// let langArr = Object.keys(language)

// for(let ln of langArr){
// for(let word of words){
//  if(ln === word){
//    //console.log(ln)
//    newArr.push(language[ln])
//  }
// }

// }
// console.log(newArr.join(' '))
// }

// lang("ia jf ut")



