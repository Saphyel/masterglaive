import birthplaces from "../data/birthplaces.json";

class BirthdayService {
  fetchAll() {
    return new Promise((resolve, reject) => resolve(birthplaces));
  }
}

export default BirthdayService;
