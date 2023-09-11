import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static async load(saveData2) {
    try {
      const data = await read(saveData2);
      const jsonData = await json(data);

      return await new GameSaving(JSON.parse(jsonData));
    } catch (error) {
      return 'Invalid data';
    }
  }
}
