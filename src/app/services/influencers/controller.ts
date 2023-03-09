import type { Influencer } from "./types";
import path from "path";
import csv from "csvtojson";

const CSV_DATA_PATH = path.join(__dirname, "./data/instagram_influencers.csv");
const data = async () => await csv().fromFile(CSV_DATA_PATH);

export const findAll = async (): Promise<Influencer[]> => {
  const items = await data();

  return items.slice(0, 10);
};
