import { getUsers } from './api.js';
import { createUsersList } from './list.js';

const usersContainer = document.querySelector('.users-list');

const render = users => {
  const usersList = createUsersList(users);
  usersContainer.innerHTML = '';
  usersContainer.append(...usersList);
};

export const init = async () => {
  const users = await getUsers();
  render(users);
};
