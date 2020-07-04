function getUserById(id) {
  const user = localStorage.getItem(id);

  return user;
}
