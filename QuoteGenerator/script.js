const button = document.getElementById("button1");
const quoteText = document.getElementById("quoteText");

const quoteArray = [ "The wizard checked your fate… and quietly closed the book.",
  "Your destiny is written in the stars. Unfortunately, it is in a language no one can read.",
  "The prophecy says you will rise. It did not say when.",
  "A dark spell surrounds your future. It might just be your decisions.",
  "The crystal ball showed success… then buffering.",
  "The wizard tried to summon your motivation. Nothing appeared.",
  "Your fortune is great… for someone else.",
  "The ancient scroll predicted this moment. It also predicted you would ignore it.",
  "A powerful aura follows you. It is mostly confusion.",
  "The spirits whisper your future… and then start laughing.",
  "You were chosen by fate. Fate is now reconsidering.",
  "The potion granted clarity. It lasted about three seconds.",
  "Your path is clear. It just leads somewhere disappointing.",
  "The wizard foresaw your success… then woke up.",
  "Magic cannot fix everything. You are a strong example of that."];

function getQuote(){
  let num = Math.floor(Math.random() * 14);
  quoteText.textContent = quoteArray[num];
}

button.addEventListener("click", getQuote);