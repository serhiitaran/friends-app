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
  state[target.name] = target.value;
  if (type === 'reset') {
    resetState();
  }
  const filtredUsers = filterUsers(originUsers, state);
  const sortedUsers = sortUsers(filtredUsers, state);
  renderUsers(sortedUsers);
};

export default (users, render) => {
  originUsers = users;
  renderUsers = render;

  return formHandler;
};
