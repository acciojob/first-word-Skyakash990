function firstWord(s) {
  // Trim leading/trailing spaces and split by space
  let words = s.trim();
 let wo=words.split(" ");
  return wo[0]; // Return the first word
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));














