import {Review}   from '../types/reviews';

export type Film = {
  id: number
  title: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
  videoLink: string,
  previewVideoLink: string,
  reviews: Review[]
}
