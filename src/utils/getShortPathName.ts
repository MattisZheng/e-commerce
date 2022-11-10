// return shortened title

function getShortenedTitle(position: number, path: string): string {
  // set condition

  return path.slice(0, position);
}

export default getShortenedTitle;
