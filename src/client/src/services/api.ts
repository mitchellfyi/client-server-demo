import type { Influencer } from "../../../app/services/influencers/types";

const API_PATH = "http://localhost:3001/api/v1";

export async function request(
  path: string,
  query?: Record<string, string>,
  options?: RequestInit
) {
  const queryString = new URLSearchParams(query).toString();
  const apiUrl = `${API_PATH}${path}?${queryString}`;

  const response = await fetch(apiUrl, options);
  const data = await response.json();

  return data;
}

export const getInfluencers = async (query?: {}) => {
  const influencers: Influencer[] = await request("/influencers", query);
  return influencers;
};
