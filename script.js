const container = document.getElementById("account-list");

accounts.forEach(account => {
  const div = document.createElement("div");
  div.className = "account";
  div.innerHTML = `
    <h2>${account.name}</h2>
    <p>Level: ${account.level}</p>
    <p>Character: ${account.character}</p>
    <a href="${account.link}">View Account</a>
  `;
  container.appendChild(div);
});