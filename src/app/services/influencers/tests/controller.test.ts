import * as controller from "../controller";
import humanFormat from "human-format";

describe("controller", () => {
  it("findAll should return a list of 10 items", async () => {
    const items = await controller.findAll();
    expect(items).toHaveLength(10);
  });

  it("findAll should return a list of 10 items with a filter", async () => {
    const items = await controller.findAll({
      filterKey: "category_1",
      filterValue: "Sports with a ball",
    });
    expect(
      items.filter((item) => item.category_1 === "Sports with a ball")
    ).toHaveLength(10);
  });

  it("findAll should return a list of 10 items with a sort", async () => {
    const itemsHigh = await controller.findAll({
      sortKey: "Followers",
    });
    const itemsLow = await controller.findAll({
      sortKey: "Followers",
      sortDirection: "asc",
    });
    const high = humanFormat.parse(`${itemsHigh[0]["Followers"]}`);
    const low = humanFormat.parse(`${itemsLow[0]["Followers"]}`);
    expect(high).toBeGreaterThan(low);
  });
});
