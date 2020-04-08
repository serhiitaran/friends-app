const NATIONALITIES = ['ch', 'de', 'es', 'fr', 'gb', 'ie'];
const NUMBER_OF_USERS = 60;
const URL = `https://randomuser.me/api/?results=${NUMBER_OF_USERS}&nat=${NATIONALITIES}`;

const getData = url =>
  fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });

export const getUsers = async () => {
  const { results } = await getData(URL);
  return results;
};
