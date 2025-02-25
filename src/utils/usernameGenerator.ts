
const adjectives = [
  "Happy", "Brave", "Clever", "Swift", "Bright",
  "Mighty", "Cosmic", "Noble", "Silent", "Wild",
  "Mystic", "Ancient", "Golden", "Crystal", "Epic"
];

const nouns = [
  "Phoenix", "Dragon", "Wolf", "Tiger", "Eagle",
  "Warrior", "Knight", "Wizard", "Ninja", "Hunter",
  "Legend", "Shadow", "Spirit", "Storm", "Star"
];

export const generateUsername = (includeNumber: boolean = false, includeSpecial: boolean = false): string => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  let username = `${adjective}${noun}`;

  if (includeNumber) {
    const number = Math.floor(Math.random() * 999) + 1;
    username += number;
  }

  if (includeSpecial) {
    const specials = ["!", "_", ".", "-"];
    username += specials[Math.floor(Math.random() * specials.length)];
  }

  return username;
};
