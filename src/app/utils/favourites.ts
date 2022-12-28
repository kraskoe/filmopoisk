export function getFavouritesLS(id: number): number[] {
  return localStorage.getItem(`favourites/${id}`) ? JSON.parse(localStorage.getItem(`favourites/${id}`) || '') : [];
}

export function setFavouritesLS(id: number, array: number[]): void {
  localStorage.setItem(`favourites/${id}`, JSON.stringify(array));
}

export function toggleFavouritesLS(userId: number, id: number): void {
  const favourites = getFavouritesLS(userId);
  if (favourites.includes(id)) {
    setFavouritesLS(userId, favourites.filter(item => item !== id));
  } else {
    favourites.push(id);
    setFavouritesLS(userId, favourites);
  }
}

export function isFavourite(userId: number, id: number): boolean {
  const favourites = getFavouritesLS(userId);
  return favourites.includes(id);
}
