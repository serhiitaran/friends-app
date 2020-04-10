import { sortUsers } from './sorter.js';
import { filterUsers } from './filter.js';

let originUsers = [];
let renderUsers = null;
let state = {
  gender: 'all',
  search: null,
  sorting: 'default',
};

const toDefaultState = () => {
  state = {
    gender: 'all',
    search: null,
    sorting: 'default',
  };
};

const formHanler = event => {
  if (event.type === 'submit') {
    event.preventDefault();
  }
  state[event.target.name] = event.target.value;
  if (event.type === 'reset') {
    toDefaultState();
  }
  const filtredUsers = filterUsers(originUsers, state);
  const sortedUsers = sortUsers(filtredUsers, state);
  renderUsers(sortedUsers);
};

export default (users, render) => {
  originUsers = users;
  renderUsers = render;

  return formHanler;
};
