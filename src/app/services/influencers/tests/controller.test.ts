import * as controller from "../controller";

describe("controller", () => {
  it("findAll should return a list of 10 items", async () => {
    const items = await controller.findAll();
    expect(items).toHaveLength(10);
  });
});
