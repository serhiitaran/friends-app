const createUserHtml = user => {
  const userHtml = document.createElement('div');
  userHtml.classList.add('user');
  userHtml.innerHTML = `
      <img class="user-image" src="${user.picture.large}" />
      <h3 class="user-name"> ${user.name.first} ${user.name.last} </h3>
      <div class="user-info">
        <div class="user-info--item">
            <p class="user-info--title">Nationality</p>
            <p class="user-info--value">${user.nat}</p>
        </div>
        <div class="user-info--item">
          <p class="user-info--title">Age</p>
          <p class="user-info--value">${user.dob.age}</p>
        </div>
        <div class="user-info--item">
          <p class="user-info--title">Gender</p>
          <p class="user-info--value">${user.gender}</p>
        </div>
      </div>
      <p class="user-location"> ${user.location.city}, ${user.location.country} </p>
      <p class="user-email"> ${user.email} </p>
      <p class="user-phone"> ${user.phone} </p>
    `;
  return userHtml;
};

export const createUsersList = users => users.map(createUserHtml);
