"use strict";
// Small helper for calling The Cat API's public endpoints (no API key needed)
// Docs: https://docs.thecatapi.com
const BASE_URL = "https://api.thecatapi.com/v1";

// Only pass along the query params we allow and the caller actually sent
const buildQuery = (query = {}, allowed = []) => {
  const params = new URLSearchParams();
  allowed.forEach((key) => {
    if (query[key] !== undefined && query[key] !== "") params.append(key, query[key]);
  });
  const str = params.toString();
  return str ? `?${str}` : "";
};

const catFetch = async (path) => {
  const response = await fetch(`${BASE_URL}${path}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Cat API error ${response.status}: ${data.message || JSON.stringify(data)}`);
  }
  return data;
};

module.exports = { catFetch, buildQuery };
