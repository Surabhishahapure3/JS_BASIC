//String Interpolation

const a = "hello"
const name = "Surabhi"
console.log(`${a} ${name} how are you`)

/**IStrings: It is a collection of characters. Strings are immutable*** */
const str = "hello"
console.log(str[0])

/****String methods*************** */
let a = "Hello world"

/**1. Length*** */
console.log(a.length)

/**2. Uppercase ***/
console.log(a.toUpperCase())

/**3. LowerCase**** */
console.log(a.toLowerCase())

/***Original String never changes */
console.log(a)   

/****charAt: The charAt() method returns the character at a specified index (position) in a string:*/
console.log(a.charAt(2)) 


/****IndexOf: indexOf method is used to find the index of the first occurrence of a specified value within a string.  */
console.log(a.indexOf('e')) 

const str = "hello-world"

/****SubString : substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring(). */
console.log(str.substring(0,4)) //cannot use negative numbers

/***slice: slice() extracts a part of a string and returns the extracted part in a new string. */
console.log(str.slice(1,3))  

const str1 = "    harsh  gujral   "
/**trim: The trim() method removes whitespace from both sides of a string: */
console.log(str1.trim())

/**replace: The replace() method replaces a specified value with another value in a string: */
console.log(str.replace("hello","hii"))

/***include:includes method is used to determine whether a string contains a specified substring. */
console.log(str.includes('hello'))






