import Building from './5-building';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  const tb = new TestBuilding(200);
  console.log(tb);
} catch (err) {
  console.log(err);
}
