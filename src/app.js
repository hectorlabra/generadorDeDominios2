import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  displayRandomDomain();
};

const generateDomains = (pronouns, adjectives, nouns, extensions) =>
  pronouns.flatMap(pronoun =>
    adjectives.flatMap(adjective =>
      nouns.flatMap(noun =>
        extensions.map(extension => `${pronoun}${adjective}${noun}${extension}`)
      )
    )
  );

const getRandomElement = array =>
  array[Math.floor(Math.random() * array.length)];

const displayRandomDomain = () => {
  const pronouns = ["the", "our"];
  const adjectives = ["great", "big"];
  const nouns = ["jogger", "racoon"];
  const extensions = [".com", ".net", ".us", ".io"];

  const domains = generateDomains(pronouns, adjectives, nouns, extensions);
  const randomDomain = getRandomElement(domains);

  document.getElementById("domain").innerHTML = randomDomain;
};

// Asegurarse de que la función esté disponible globalmente
window.displayRandomDomain = displayRandomDomain;
