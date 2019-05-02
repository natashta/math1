import Character from './base_class';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}
