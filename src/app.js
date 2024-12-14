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
  const pronouns = ["the", "our", "my", "their", "your"];
  const adjectives = ["great", "big", "awesome", "cool", "epic", "fantastic"];
  const nouns = ["jogger", "racoon", "ninja", "coder", "dev", "guru"];
  const extensions = [".com", ".net", ".us", ".io", ".dev", ".app"];

  const domains = generateDomains(pronouns, adjectives, nouns, extensions);
  const randomDomain = getRandomElement(domains);

  const domainElement = document.getElementById("domain");

  domainElement.classList.add("fade-out");

  setTimeout(() => {
    domainElement.innerHTML = randomDomain;
    domainElement.classList.remove("fade-out");
    domainElement.classList.add("fade-in");

    setTimeout(() => {
      domainElement.classList.remove("fade-in");
    }, 500);
  }, 200);
};

window.displayRandomDomain = displayRandomDomain;
