// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...numbers) {
  // Add a loop here
  // let total = 0;
  // for (const n of numbers) {
  //   total += n;
  // }
  // return total;
  return numbers.reduce((total, n) => (total += n));
}

add(1, 2, 3, 4, 5);
