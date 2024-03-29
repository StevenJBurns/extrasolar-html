import { ISolarSystem } from './ISolarSystem';

export class SolarSystem {
  private constructor(private readonly args: ISolarSystem) {
  };

  static create(args: ISolarSystem) {
    return new SolarSystem(args);
  };

  get Properties(): ISolarSystem {
    return { ...this.args };
  };
};
