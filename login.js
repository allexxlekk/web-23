const userData = [
  { username: "lek", password: "bestcoder" },
  { username: "ntino", password: "8anas!s" },
  { username: "kogi4ever", password: "pubgMono" },
];

function check_login(username, password) {
  userData.forEach((user) => {
    if (username === user.username) {
      if (password === user.password) return true;
      return false;
    }
    return false;
  });
}
