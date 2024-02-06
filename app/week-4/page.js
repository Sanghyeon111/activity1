"use client";
import NewEvent from "./new-item.js";

export default function Page() {
    
    return (
      <main>
        <NewEvent />
      </main>
    )
  }

// export default function Page() {
//     const [count, setCount] = useState(0);
//     const increment = () => setCount(count + 1);
//     return (
//         <main className="m-4">
//             <h1 className="text-4xl">Practice UseState</h1>
//             <p>Count: {count}</p>
//             <button onClick = {increment}>Increment</button>
//         </main>
//     );
// }


// // practice
// function greet1(name) {
//     console.log("Inside greet function");

//     return `Hello, ${name}!`;
// }

// const greet2 = (name) => {
//     console.log("Inside greet function");

//     return `Hello, ${name}!`;
// }

// const greet3 = (name) => `Hello, ${name}!`; // after arrow, return output

// function doThingMultiple(func, n) {
//     for (let i = 0; i < n; i++) {
//         console.log(func());
//     }
// }
// doThingMultiple(() => console.log("You got this!"), 3);

// const multiplyBy = (num1) => {
//     // Return a new function that will multiply its given argument by num1
//     return (num2) => {
//       return num1 * num2;
//     };
//   };
   
//   let multiplyByTwo = multiplyBy(2);
//   let multiplyByTwoAgain = multiplyBy(2);
//   console.log(multiplyByTwoAgain(2)); // Output: 8

