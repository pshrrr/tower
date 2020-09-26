const v = (e) => {
  const r = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/;
  return r.test(e);
};

document.getElementById("email").addEventListener("input", (i) => {
  v(i.target.value)
    ? i.target.setCustomValidity("")
    : i.target.setCustomValidity("Not an email!");
});

document.getElementById("name").addEventListener("input", (i) => {
  i.target.value.length > 2
    ? i.target.setCustomValidity("")
    : i.target.setCustomValidity("Name must be at least 2 characters");
});
