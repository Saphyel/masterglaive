import {Store, get, keys, set, del} from "idb-keyval";
import {v4 as uuid} from 'uuid';

export default class ChocoboService {
  store = new Store('saphyel', 'masterglaive');

  async fetchAll() {
    let payload = [];
    const Ids = await keys(this.store);
    for (let i = 0; i < Ids.length; i++) {
      payload.push({id: Ids[i], chocobo: await this.fetch(Ids[i])})
    }
    return payload;
  }

  async fetch(id) {
    return get(id, this.store);
  }

  async insert(hp, attack, colour, speed) {
    const id = uuid();
    const payload = {
      hp: hp,
      attack: attack,
      speed: speed,
      colour: colour
    };

    set(id, payload, this.store);

    return {id: id, chocobo: payload};
  }

  async remove(id) {
    await del(id, this.store);
  }
}
