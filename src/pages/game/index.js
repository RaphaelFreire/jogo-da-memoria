const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard(
  " ",
  "img/icon-collabcode.svg",
  "Gueio mascote da CollabeCode"
);

const $memoryCardC = createMemoryCard(
  "-front",
  "/img/icon-c.png" ,
  "Icone de um livro da linguagem C++"
);

const $memoryCardJS = createMemoryCard(
  "-front",
  "img/icon-JS.png",
  "Icone de um livro da linguagem JavaScript"
);

const $memoryCardJava = createMemoryCard(
  "-front",
  "img/icon-Java.png",
  "Icone de um livro da linguagem Java"
);

const $memoryCardWoman = createMemoryCard(
  "-front",
  "img/icon-woman.png",
  "Icone de uma mulher codando"
);


$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$root.insertAdjacentElement("beforeend", $cardsWrapper);
