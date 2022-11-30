const userData = [
  { username: "lek", password: "bestcoder" },
  { username: "ntino", password: "8anas!s" },
  { username: "kogi4ever", password: "pubgMono" },
];

function login(username, password) {
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].username === username) {
      if (userData[i].password === password) return true;
    }
    return false;
  }
  return false;
}

const loginSelect = document.querySelector(".loginSelect");
loginSelect.addEventListener("click", (e) => {
  const loginForm = document.querySelector("#login-form");
  loginForm.classList.toggle("hidden");
});

const loginButton = document.querySelector(".loginButton");
loginButton.addEventListener("click", (e) => {
  const inputs = document.querySelectorAll("input");
  const username = inputs[0].value;
  const password = inputs[1].value;
  console.log(login(username, password));
});
