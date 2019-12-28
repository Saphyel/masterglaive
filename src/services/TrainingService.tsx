import training from "../data/training.json";

export default class TrainingService {
  fetchAll() {
    return new Promise((resolve, reject) => resolve(training));
  }
}
