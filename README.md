# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @princeton98/lotide`

**Require it:**

`const _ = require('@princeton98/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Checks between the two inputted arrays, and returns true or false if the arrays are equal to each other.
* `assertEqual(...)`: Checks between the two inputs, and returns ture or false if the inputs are equal to each other.
* `assertObjectsEqual(...)`: Checks between the two objects, and returns true or false if the objects are equal to each other. 
* `countLetters(...)`: Keeps track of the number of times a letter appears in the inputted string.
* `countOnly(...)`: Counts only the indicated word, which is the second input, from an object that holds the word, and counts the amount of times the indicated input is seen.
* `eqArrays(...)`: Checks to see if the two inputted arrays are equal to each other by returning true or false.
* `eqObjects(...)`: Checks to see if the two inputted objects are equal to each other by returning true or false.
* `findKey(...)`: In the first parameter, input the object. In the second parameter, input the callback function that will find a value. That value will be used to find the key that is assigned to that value, and return that key.
* `findKeyByValue(...)`: Input the object in the first parameter, and in the second parameter, list the value that wants to be found. The function will return the key that has the specific value.
* `head(...)`: This function will grab the first index in the array.
* `letterPositions(...)`: Insert a string and the function will list out the letter and the index positions of where the letter shows up in the string.
* `map(...)`: Input an array, and in the second parameter, insert a callback function that will ask for the individual elements' index, and the function will return the elements' index values.
* `middle(...)`: This function will find the middle value(s) of an array. If the length of the array is even, it will return two values. If the length of the array is odd, it will return one value.
* `tail(...)`: This function will return the last value of the elements in the array.
* `takeUntil(...)`: This function will return the values of an element until it matches with a value found from the callback function (the second parameter inputted to the function).
* `without(...)`: Function will remove all of the values that is indicated through the second parameter from the first parameter, the array.