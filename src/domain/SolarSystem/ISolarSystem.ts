import { Planet } from '../Planet/Planet';
import { Star } from '../Star/Star';

export type ISolarSystem = {
  id: string;
  name: string;
  stars: Array<Star>;
  planets: Array<Planet>;
  distanceFromEarth: number;
};
