import Character from '../src/js/base_class';
import Daemon from '../src/js/daemon_class';
import Magician from '../src/js/magician_class';

test('Создание персонажа с заданными свойствами', () => {
  const character = new Character();
  const expected = {
    level: 1,
    health: 100,
    attack: 0,
    defence: 0,
    distance: 1,
    stoned: false,
  };
  expect(character).toEqual(expected);
});

test('Атака Daemon на расстоянии без дурмана', () => {
  const expected = 60;
  const daemon = new Daemon();
  daemon.distance = 5;
  const received = daemon.attack;
  expect(received).toBe(expected);
});

test('Атака Magician с дурманом', () => {
  const expected = 85;
  const magician = new Magician();
  magician.stoned = 'stoned';
  magician.distance = 2;
  const received = magician.attack;
  expect(received).toBe(expected);
});
