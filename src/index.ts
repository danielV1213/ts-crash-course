let numbers: number[] = [1, 2, 3];

// What if the array was empty
let newArray = [];

// You could append any type of variables to it because it is not expecting a particular type.
newArray[0] = "1";
newArray[1] = 2;

// But if the type of the expected elements is specified, then the elements to append will have to be of the that type.
let anotherArray: number[] = [];
anotherArray[0] = 1;
// This assignment will throw an error. It is always recommended to explicitly set an empty array's type.
// anotherArray[1] = "2";

// Code completion. The TS compiler also completes the methods for the expected type of the array's elements.
// anotherArray.forEach(n => n.);