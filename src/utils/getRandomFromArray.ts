// return n random for given array

export default function getRandomFromArray(n: number, arr: number[]): number[] {
  let generated: number[] = [];

  while (generated.length < n) {
    let pointer = Math.floor(Math.random() * arr.length);
    generated.push(arr[pointer]);
    arr.splice(pointer, 1);
  }
  return generated;
}
