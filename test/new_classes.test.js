import Daemon from '../src/js/daemon_class';
import Magician from '../src/js/magician_class';

test('Атака Daemon на расстоянии без stoned', () => {
  const expected = 60;
  const daemon = new Daemon('Azrael');
  daemon.distance = 5;
  const received = daemon.attack;
  expect(received).toBe(expected);
});

test('Атака Magician с stoned', () => {
  const expected = 85;
  const magician = new Magician('Merlin');
  magician.distance = 2;
  magician.stoned = true;
  const received = magician.attack;
  expect(received).toBe(expected);
});
