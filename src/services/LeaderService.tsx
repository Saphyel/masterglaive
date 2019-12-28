import leaders from "../data/leaders.json";

export default class LeaderService {
  fetchAll() {
    return new Promise((resolve, reject) => resolve(leaders));
  }
}
