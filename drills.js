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
function hanoi(disc, rods){
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
    hanoi(disc - 1, [source, destination, extra]);
    const movedDisc = source.discs.pop();
    destination.discs.push(movedDisc);
    console.log(rods.sort((a,b) => { return a.id < b.id ? -1 : 1; }));
    console.log(`Moved disc ${disc} to rod ${destination.id}`);
    hanoi(disc - 1, [extra, source, destination]);
  }
}

hanoi(5);