import axios from 'axios';

const baseUrl = 'https://fake-api-for-music-manager-b5xnrg8pq9vu.runkit.sh';

async function apiRequest(axiosConfig) {
  if (!axiosConfig.url) return new Error('Need url to do shit');
  if (!axiosConfig.method) {
    if (axiosConfig.data) {
      axiosConfig.method = 'post';
    } else {
      axiosConfig.method = 'get';
    }
  }
  axiosConfig.url = baseUrl + axiosConfig.url;

  try {
    const response = await axios(axiosConfig);
    return response ? response.data : null;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getCurations() {
  const url = '/curations';
  try {
    const result = await apiRequest({ url });
    return result;
  } catch (error) {
    return error;
  }
}

async function getCuration(id) {
  const url = `/curations/${id}`;
  try {
    const result = await apiRequest({ url });
    return result;
  } catch (error) {
    return error;
  }
}

async function getTrackById(id) {
  const url = `/tracks/${id}`;
  try {
    const result = await apiRequest({ url });
    return result;
  } catch (error) {
    return error;
  }
}

export { getCuration, getCurations, apiRequest, getTrackById };
