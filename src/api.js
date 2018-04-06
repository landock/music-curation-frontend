import 'cross-fetch/polyfill';

export function getCurations() {
  const url =
    'https://private-4cf18-musiccurationmanager.apiary-mock.com/yarn/curations';

  return fetch(url)
    .then(response => response.json())
    .then(body => {
      return { curationsById: body };
    })
    .catch(error => {
      console.log(error);
      return { error: error };
    });
}
