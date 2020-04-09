export const sortUsers = (users, { sorting }) => {
  const ascSort = (a, b) => (a < b ? -1 : 1);
  const descSort = (a, b) => (a < b ? 1 : -1);
  const sortedUsers = [...users];
  switch (sorting) {
    case 'age-desc':
      return sortedUsers.sort((a, b) =>
        descSort(a.dob.age, b.dob.age),
      );
    case 'age-asc':
      return sortedUsers.sort((a, b) =>
        ascSort(a.dob.age, b.dob.age),
      );
    case 'name-desc':
      return sortedUsers.sort((a, b) =>
        descSort(a.name.first, b.name.first),
      );
    case 'name-asc':
      return sortedUsers.sort((a, b) =>
        ascSort(a.name.first, b.name.first),
      );
    default:
      return sortedUsers;
  }
};
