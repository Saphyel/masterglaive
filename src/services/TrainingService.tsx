import training from "../data/training.json";

class TrainingService {
  fetchAll() {
    return new Promise((resolve, reject) => resolve(training));
  }
}

export default TrainingService;
