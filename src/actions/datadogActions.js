export const DATADOG_API_URL = `https://status.datadoghq.com/history.json`;
export const DATADOG_FETCH_API = "FETCH_API_DATADOG";

export function fetchAPIDatadog(apiResponse) {
  return {
    type: DATADOG_FETCH_API,
    response: apiResponse
  };
}
