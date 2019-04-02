// 1.Big 0
// O(1) - time does not change no matter the # of people
// O(n) - you need go with each individual, operations # depends on the #
// of people
// 2. even
// O(1) - arithmetic, you only put one value, time is not dependent
// 3. are you here?
// O(n^2) - because of nested loops
// 4. Doubler
// O(n) going through every item, runtime is proportional to the size
// 5. Naive Search
// O(n) going through every item, runtime is proportional to the size
// 6. Creating Pairs
// O(n^2) - because of nested loops, going through each array increases
// the runtime to the power of
// 7. Compute the sequence
// returns the Fibonacci Sequence in an array
// O(n) - it needs to go through the entire array in order to find the
// result, the runtime is linear
// 8. Efficient search
// O(log(n)) - this is a binary search within a sorted array, the runtime would be
// logarithmic. it splits it in half each time and searches it only in 
// that half; therefore, it decreases/halves each time it runs through 
// the algorithm
// 9. Random element
//  O(1) - everytime it grabs one item from the array so it does not matter
// the length of the array
// 10. What am I?
// the function returns prime numbers
// O(n) - it needs to loop through until it finds whether the # is prime
// 11. Tower of Hanoi
// let rods = [ [ rod1 ], [ rod2 ], [ rod3 ] ];
function solveHanoiTower(disc, rods){
  //initialize rods if they don't yet exist.
  if (!rods) {
    let startingRod = {
      id: 1,
      discs: [],
    };
    for (let i = disc; i > 0; i--) {
      startingRod.discs.push(i);
    }
    rods = [startingRod, { id: 2, discs: [], }, { id: 3, discs: [], }];
  }
  //works by rotating the order of the rods to move the appropriate disc.
  //continues until there are no discs left to move.
  const [source, extra, destination] = rods;
  if (disc > 0) {
    solveHanoiTower(disc - 1, [source, destination, extra]);
    const movedDisc = source.discs.pop();
    destination.discs.push(movedDisc);
    console.log(rods.sort((a,b) => { return a.id < b.id ? -1 : 1; }));
    console.log(`Moved disc ${disc} to rod ${destination.id}`);
    solveHanoiTower(disc - 1, [extra, source, destination]);
  }
}

//after 7 recursive calls, the rods look like:
// [ { id: 1, discs: [ 5, 4 ] },
//   { id: 2, discs: [] },
//   { id: 3, discs: [ 3, 2, 1 ] } ]

//To solve 3 disks requires 7 calls
//To solve 5 disks requires 21 calls

//Function is O(n^2), an increase in disc count increases the run time by more than just the increase of the discs.

//12

//1 Counting Sheep:

function countSheep(n) {
  for (let i = n; i >= 0; i--) {
    if (i === 0) {
      console.log('All sheep jumped over the fence.');
    } else {
      console.log(`${i}: Another sheep jumped over the fence.`);
    }
  }
}

// Iterative: O(N), since we're looping through N elements.
// Recursive: O(N), will call the function N number of times, breaks at 0.

//2 Power Calculator:

function powerCalculator(int, pow) {
  if(pow < 0){
    return 'exponent should be >= 0';
  }
  let result = int;
  for (let i = 1; i < pow; i++) {
    result = result * int;
  }
  return result;
}

// Iterative: O(N), looping pow - 1 times.
// Recursive: O(N), calling the recursive function exponent - 1 times.

function reverseString(string) {
  const length = string.length;
  let reversedString = '';
  for (let i = length-1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

// Iterative: O(N), changes based on the length of the string directly.
// Recursive: O(N), calls the recursive function with one less letter each time, so calls length of string times.

function nthTriangularNumber(n) {
  let num = 0;
  for (let i = 1; i <= n; ++i) {
    num += i;
  }
  return num;
}

// Iterative: O(N), iterates starting at 1 until it reaches n.
// Recursive: O(N), decreases N by 1 each call, so calls N number of times.

function stringSplitter(string, sep) {
  let i = 0;
  while (i < string.length) {
    if (string[i] === sep) {
      string = string.slice(0, i) + string.slice(i+1);
    } else {
      i++;
    }
  }
  return string;
}

// Iterative: O(N), run-time changes based on string length since we're going over each letter.
// Recursive: O(log(N)), it splits the string into sections and finds any seperators in it. Run-time is based on how many seperators, NOT how long the string is.