import { getUsers } from './api.js';
import { createUsersList } from './list.js';
import createFormHandler from './form-handler.js';

const usersContainer = document.querySelector('.users-list');
const form = document.querySelector('.form');

const render = users => {
  const usersList = createUsersList(users);
  usersContainer.innerHTML = '';
  usersContainer.append(...usersList);
};

export const init = async () => {
  const users = await getUsers();
  render(users);

  const formHandler = createFormHandler(users, render);
  form.addEventListener('change', formHandler);
  form.addEventListener('keyup', formHandler);
  form.addEventListener('submit', formHandler);
  form.addEventListener('reset', formHandler);
};
