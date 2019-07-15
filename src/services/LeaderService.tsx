import leaders from "../data/leaders.json";

class LeaderService {
  fetchAll() {
    return new Promise((resolve, reject) => resolve(leaders));
  }
}

export default LeaderService;
