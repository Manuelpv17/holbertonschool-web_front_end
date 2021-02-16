//Lexical scoping and welcome message

function welcome(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;

  function displayFullName() {
    alert(`welcome ${fullName}!`);
  }

  displayFullName();
}

welcome("Holberton", "School");
