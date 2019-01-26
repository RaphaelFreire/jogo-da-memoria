const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();

const $memoryCardC = createMemoryCard({
    nameClass: "-front",
    src: "/img/icon-c.png",
    alt: "Icone de um livro da linguagem C++"
  });

const $memoryCardJS = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-JS.png",
  alt: "Icone de um livro da linguagem JavaScript"
});

const $memoryCardJava = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-Java.png",
  alt: "Icone de um livro da linguagem Java"
});

const $memoryCardWoman = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-woman.png",
  alt: "Icone de uma mulher codando"
});


$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$root.insertAdjacentElement("beforeend", $cardsWrapper);
