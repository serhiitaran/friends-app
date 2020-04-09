export const filterUsers = (users, { search, gender }) => {
  const filtredUsers = users.filter(user => {
    const userName = `${user.name.first} ${user.name.last}`;
    const checkedSearch =
      search === null
        ? true
        : userName.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    const checkedGender =
      gender === 'all' ? true : user.gender === gender;
    return checkedSearch && checkedGender;
  });
  return filtredUsers;
};
