//Changing DOM with closure

function changeMode(size, weight, transform, background, color) {
  return function () {
    const body = document.querySelector("body");
    body.style["font-size"] = size;
    body.style["font-weight"] = weight;
    body.style["text-transform"] = transform;
    body.style["background-color"] = background;
    body.style["color"] = color;
  };
}

function main() {
  spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  // Hello World
  const new_p = document.createElement("p");
  new_p.textContent = "Welcome Holberton!";
  document.body.appendChild(new_p);

  //Buttons
  const spooky_b = document.createElement("button");
  spooky_b.textContent = "Spooky";
  spooky_b.onclick = () => spooky();
  document.body.appendChild(spooky_b);

  const darkMode_b = document.createElement("button");
  darkMode_b.textContent = "Dark mode";
  darkMode_b.onclick = () => darkMode();
  document.body.appendChild(darkMode_b);

  const screamMode_b = document.createElement("button");
  screamMode_b.textContent = "Scream mode";
  screamMode_b.onclick = () => screamMode();
  document.body.appendChild(screamMode_b);
}

main();
