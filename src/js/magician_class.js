import Character from './base_class';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
  }
}
