import Character from './base_class';

export default class Daemon extends Character {
  constructor() {
    super();
    this.type = Daemon;
    this.defence = 25;
    this.attack = 10;
  }
}
