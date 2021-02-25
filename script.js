/*const greeting = "Hello World";
console.log(greeting);*/

let input = prompt("Hey there ^^ What the fuck do you want?");

const botAnswer = (input) => {
  if (input.match(/[?]/g)) {
    return "Ouais Ouais...";
  } else if (input.match(/^[^a-z]+$/)){
    return "Pwa... calme-toi... connard!";
  } else if (input.includes("Fortnite")) {
    return "On s'fait une partie soum-soum?";
  } else if (input === "") {
    return "T'en en PLS... Connard!";
  } else {
    return "balek.";
  }
};

console.log(botAnswer(input));