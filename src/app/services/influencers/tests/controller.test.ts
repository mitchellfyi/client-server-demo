import * as controller from "../controller";

describe("influencers controller", () => {
  it("findAll should return a list of influencers", async () => {
    const items = await controller.findAll();

    expect(items).toHaveLength(10);
  });
});
