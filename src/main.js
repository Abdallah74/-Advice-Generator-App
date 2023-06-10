const qoutes = document.querySelector(".qoute"),
  id_no = document.querySelector(".id span");

fetch("https://api.adviceslip.com/advice")
  .then((request) => request.json())
  .then((add) => {
    qoutes.innerHTML = `"${add.slip.advice}"`;
    id_no.innerHTML = `#${add.slip.id}`;
  });
