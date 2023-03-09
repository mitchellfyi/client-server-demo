import csv from "csvtojson";
import humanFormat from "human-format";

const humanFormattedFields = [
  "Followers",
  "Authentic engagement",
  "Engagement avg",
];

export const loadData = async (
  filePath: string,
  { filterKey, filterValue, sortKey, sortDirection, offset, limit }: any = {
    offset: 0,
    limit: 10,
  }
): Promise<any[]> => {
  let items = [];

  if (filePath.includes(".csv")) {
    items = await csv().fromFile(filePath);
  }

  if (limit > 100 || limit < 10) {
    limit = 10;
  }

  if (filterKey && filterValue) {
    items = items.filter((item) => {
      return item[filterKey] === filterValue;
    });
  }

  if (sortKey) {
    items = dataSort(items, sortKey, sortDirection);
  }

  return items.slice(offset, limit);
};

const dataSort = (
  items: any[],
  sortKey: string,
  sortDirection?: "asc" | "desc"
) => {
  return items.sort((a, b) => {
    if (humanFormattedFields.includes(sortKey)) {
      a[sortKey] = humanFormat.parse(`${a[sortKey]}`);
      b[sortKey] = humanFormat.parse(`${b[sortKey]}`);
    }

    if (sortDirection === "asc") {
      return a[sortKey] - b[sortKey];
    }

    return b[sortKey] - a[sortKey];
  });
};
