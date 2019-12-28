import birthplaces from "../data/birthplaces.json";

export default class BirthdayService {
  fetchAll() {
    return new Promise((resolve, reject) => resolve(birthplaces));
  }
}
