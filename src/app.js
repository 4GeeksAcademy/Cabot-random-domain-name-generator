/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let button = document.querySelector("#generator");
let htmlGeneratedDomain = document.querySelector("#domain-name");

button.addEventListener("click", function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon", "taco", "raft"];
  let extension = [".com", ".us", ".net", ".org", ".co"];

  const randomPronoun = Math.floor(Math.random() * pronoun.length);
  //console.log(pronoun[randomPronoun]);
  const randomAdj = Math.floor(Math.random() * adj.length);
  //console.log(adj[randomAdj]);
  const randomNoun = Math.floor(Math.random() * noun.length);
  //console.log(noun[randomNoun]);
  const randomExtension = Math.floor(Math.random() * extension.length);
  //console.log(extension[randomExtension]);
  const randomDomain =
    "www." +
    pronoun[randomPronoun] +
    adj[randomAdj] +
    noun[randomNoun] +
    extension[randomExtension];
  //console.log(randomDomain);
  htmlGeneratedDomain.innerHTML = randomDomain;
});
