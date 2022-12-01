function getShortenedTitle(position: number, path: string): string {
  // set condition
  // closest then ... slice
  return `${path.slice(0, position)}...`;
}

export default getShortenedTitle;
