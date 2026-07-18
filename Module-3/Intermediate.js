//problem one

const ucFirstLetters = (str) => {
  let character,
    words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    character = words[i][0];
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
};

console.log(ucFirstLetters("los angeles"));

//problem two

const truncate = (str, max) => {
  if (str.length <= max) return str;
  else return str.substring(0, 25) + "...";
};

const truncateV2 = (str, max) => {
  return str.length <= max ? str : str.substring(0, 25) + "...";
};

console.log(truncate("This text will be truncated if it is too long", 25));
console.log(truncateV2("This text will be truncated if it is too long", 25));

//problem three

const animals = ["Tiger", "Giraffe"];
console.log(animals);

animals.push("Rhino");
animals.push("Otter");

animals.unshift("Lion");
animals.unshift("Ostrich");

console.log(animals);
animals.sort();
console.log(animals);

const replaceMiddleAnimal = (newValue) => {
  let middle = animals.length / 2;
  animals[middle] = newValue;
};

replaceMiddleAnimal("Wolf");
console.log(animals);

replaceMiddleAnimal("Lionfish");

const findMatchingAnimals = (arr, beginsWith) => {
  return arr.filter((animal) => filterAnimals(animal, beginsWith));
};

const filterAnimals = (animal, beginsWith) => {
  let animalStartsWith = animal.substring(0, beginsWith.length);
  animalStartsWith = animalStartsWith.toLowerCase();
  beginsWith = beginsWith.toLowerCase();
  return animalStartsWith === beginsWith;
};

const someAnimals = findMatchingAnimals(animals, "lion");

console.log(someAnimals);

//problem four

//split, map, and join
const camelCase = (cssProp) => {
  return cssProp
    .split("-")
    .map((word, i) => {
      if (i > 0) {
        const character = word[0];
        word = word.substring(1);
        word = character.toUpperCase() + word;
      }
      return word;
    })
    .join("");
};

/*

const camelCase = (cssProp) => {
  const arr = cssProp.split("-");

  for loop with no conditional

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }

  conditional operator in for of loop

  for (let i in arr) {
    arr[i] = (i === 0 ? arr[i] : arr[i][0].toUpperCase() + arr[i].substring(1));
  }

  return arr.join();
};
*/

console.log(camelCase("this-is-a-prop"));
console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

//problem five

//a: calling toFixed on the operands does not call it on the result, it does not solve the underlying apprroximation/nnumber representaation issue

let twentyCents = 0.2,
  tenCents = 0.1;

const currencyAddition = (float1, float2) => {
  return (float1 + float2).toFixed(2);
};

console.log(currencyAddition(twentyCents, tenCents));

const currencyOperation = (float1, float2, operation) => {
  if (operation === "+") return (float1 + float2).toFixed(2);
  if (operation === "-") return (float1 - float2).toFixed(2);
  if (operation === "*") return (float1 * float2).toFixed(2);
  if (operation === "/") return (float1 / float2).toFixed(2);
  return false;
};

console.log(currencyOperation(0.25, 0.46, "+"));
console.log(currencyOperation(0.32, 0.16, "-"));
console.log(currencyOperation(0.54, 4, "*"));
console.log(currencyOperation(18, 0.75, "/"));

//problem six

const unique = (duplicateArray) => [...new Set(duplicateArray)];

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const rudiments = [
  "five stroke",
  "seven stroke",
  "flamacue",
  "seven stroke",
  "triple ratamacue",
  "five stroke",
  "flamacue",
];

console.log(unique(colors));
console.log(unique(testScores));
console.log(unique(rudiments));

//problem seven

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

const getBookTitle = (bookId) => books.find((book) => book.id === bookId);
const getOldBooks = () => books.filter((book) => book.year < 1950);
const addGenre = () => books.map((book) => (book.genre = "classic"));
const getTitles = (authorInitials) =>
  books
    .filter((book) => book.author[0] === authorInitials)
    .map((book) => book.title);
const latestBook = () => console.log(getBookTitle(3));
console.log("-------------");
console.log(getOldBooks());
console.log("-------------");
addGenre();
console.log(books);
console.log("-------------");
console.log(getTitles("A"));
console.log("-------------");

//problem eight

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

const phoneBookDEF = new Map([
  ["David", "00000000"],
  ["Ellie", "111111111"],
  ["Francine", "555555555"],
]);

phoneBookABC.set("Caroline", "999999999");

const printPhoneBook = (contacts) => {
  for (let prop of contacts) {
    console.log(prop[0] + ": " + prop[1]);
  }
};

printPhoneBook(phoneBookABC);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

console.log("-----------");
printPhoneBook(phoneBook);

//problem nine
