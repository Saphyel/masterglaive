import leaders from "../data/leaders.json";
import LeaderService from "./LeaderService";

it('get all', async () => {
  expect.assertions(1);
  const data = await new LeaderService().fetchAll();
  expect(data).toEqual(leaders);
});
