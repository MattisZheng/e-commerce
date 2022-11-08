// return n random number for given array without duplicates

export default function getRandom(n: number, arr: number[]) {
  let random: number[] = [];

  // for loop?

  while (arr.length < n) {
    let r = Math.floor(Math.random() * arr.length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return random;
}

console.log(getRandom(1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 1
