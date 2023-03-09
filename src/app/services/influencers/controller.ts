import path from "path";
import type { Influencer } from "./types";
import { loadData } from "../../../utils/data";

const CSV_DATA_PATH = path.join(__dirname, "./data/instagram_influencers.csv");

export const findAll = async (query?: any): Promise<Influencer[]> => {
  let items = await loadData(CSV_DATA_PATH, query);

  return items.slice(0, 10);
};
