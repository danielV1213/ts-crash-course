// Tuples. It's a typed array with a pre-defined length and types for each index.
let user: [number, string] = [1, 'Daniel'];

// It also has code completion, so if for example, we access an element with type "number", then we will obtain the methods for a Number object.
user[0].toFixed();
console.log(user[1].includes('o'));
// For some reason, tuples in TS allow the user to access every single array method, including the "push()" method, without throwing any errors from the compiler; which means that you could push elements that surpass the pre-defined length to the array. This is something to take into consideration when working with tuples.
// user.push(1);

// It is also recommended to use tuples for storing 2 elements tops, because the more elements you add, the more confusing the structure gets.