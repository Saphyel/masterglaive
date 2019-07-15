import trainings from "../data/training.json";
import TrainingService from "./TrainingService";

it('get all', async () => {
  expect.assertions(1);
  const data = await new TrainingService().fetchAll();
  expect(data).toEqual(trainings);
});
