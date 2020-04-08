import { getUsers } from './api.js';

export const init = async () => {
  const users = await getUsers();
  console.log(users);
};
