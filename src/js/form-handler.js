import { sortUsers } from './sorter.js';
import { filterUsers } from './filter.js';

let originUsers = [];
let renderUsers = null;
let state = {
  gender: 'all',
  search: null,
  sorting: 'default',
};

const resetState = () => {
  state = {
    gender: 'all',
    search: null,
    sorting: 'default',
  };
};

const formHandler = ({ type, target }) => {
  if (type === 'submit') {
    event.preventDefault();
  }

  if (type === 'reset') {
    resetState();
  }

  state[target.name] = target.value;
  const filtredUsers = filterUsers(originUsers, state);
  const sortedUsers = sortUsers(filtredUsers, state);
  renderUsers(sortedUsers);
};

export default (users, render) => {
  originUsers = users;
  renderUsers = render;

  return formHandler;
};
