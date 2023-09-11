import GameSavingLoader from '../app';
import GameSaving from '../gameSaving';

const saveData = '{"id": 9,"created": 1546300800, "userInfo": {"id": 1, "name": "Hitman", "level": 10, "points":2000}}';
const hitman = new GameSaving(JSON.parse(saveData));

test('should work correct', async () => {
  const result2 = await GameSavingLoader.load(saveData);

  expect(result2).toEqual(hitman);
});

test('should work correct', async () => {
  const result2 = await GameSavingLoader.load(false);

  expect(result2).toBe('Invalid data');
});
