function createCardsWrapper() {
     const $cardsWrapper = document.createElement("section");
     $cardsWrapper.classList.add("cards-wrapper");

     const $head = document.querySelector("head");
     const $style = document.createElement("style");

     $style.textContent = `
    .cards-wrapper{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 10px; 
      width: 100vw; 
    }

    .cards-wrapper > .memory-card{
      margin-bottom: 10px;
    }
  `;

     $head.insertBefore($style, null);

     $cardsWrapper.addEventListener("click", event => {
          const $isActiveMemoryCard = $event.target.closest(".memory-card");
          let qtdActiveMemoryCard = 0;

          console.log("Origin:", event.target);
          console.log("closest:", $isActiveMemoryCard);

          if ($isActiveMemoryCard) {
               console.log("VERDADE");
          } else {
               console.log("MENTIRA");
          }
     });

     return $cardsWrapper;
}
