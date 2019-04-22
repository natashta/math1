import Character from './base_class';

export default class Magician extends Character {
  constructor() {
    super();
    this.type = Magician;
    this._attack = 10;
  }
}
