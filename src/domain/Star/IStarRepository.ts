import { Star } from "./Star";

export interface IStarRepository {
  create(): Promise<Star>;
  getAll(): Promise<Array<Star>>;
  find(id: string): Promise<Star>;
  update(id: string): void;
  delete(id: string): void;
};
