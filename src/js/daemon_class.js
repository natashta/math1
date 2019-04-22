import Character from './base_class';

export default class Daemon extends Character {
  constructor() {
    super();
    this.type = Daemon;
    this._attack = 10;
  }
}
