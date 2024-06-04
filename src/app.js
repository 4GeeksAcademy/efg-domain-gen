/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const pronouns = ["the", "our"];
  const adjs = ["great", "big"];
  const nouns = ["coder", "quoter"];

  const domains = [];

  for (const i in pronouns) {
    for (const j in adjs) {
      for (const k in nouns) {
        const pronoun = pronouns[i];
        const adj = adjs[j];
        const noun = nouns[k];

        const d = pronoun + adj + noun + ".com";
        domains.push(d);
      }
    }
  }
  console.log(domains);

  const listItems = domains.join("<br/>");
  document.querySelector("div").innerHTML = listItems;
};
