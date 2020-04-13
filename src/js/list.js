const createUserHtml = user => {
  const userHtml = document.createElement('div');
  userHtml.classList.add('user');
  userHtml.innerHTML = `
      <img class="user__image" src="${user.picture.large}" />
      <h3 class="user__name"> ${user.name.first} ${user.name.last} </h3>
      <div class="user-info">
        <div class="user-info__item">
            <p class="user-info__title">Nationality</p>
            <p class="user-info__value">${user.nat}</p>
        </div>
        <div class="user-info__item">
          <p class="user-info__title">Age</p>
          <p class="user-info__value">${user.dob.age}</p>
        </div>
        <div class="user-info__item">
          <p class="user-info__title">Gender</p>
          <p class="user-info__value">${user.gender}</p>
        </div>
      </div>
      <p class="user__location"> ${user.location.city}, ${user.location.country} </p>
      <p class="user__email"> ${user.email} </p>
      <p class="user__phone"> ${user.phone} </p>
    `;
  return userHtml;
};

export const createUsersList = users => users.map(createUserHtml);
