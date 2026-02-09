const errorEl = document.querySelector("#error");
const usersList = document.querySelector('#users-list');

export const renderUsers = (users) => {
  usersList.innerHTML = '';

  users.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.username}) — ${user.email}`;
    li.dataset.id = user.id;

    usersList.append(li);
  });
}

export const renderError = (msg) => {
  errorEl.textContent = msg;
}