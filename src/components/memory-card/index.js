const createMemoryCard = nameClass => `
    <article class="memory-card ${nameClass}">
        <img 
            class='icon' 
            src=" ${
                nameClass ==="-front" ? "img/icon-c.png" : "img/icon-collabcode.svg"
                } " 
            alt=" ${
                nameClass === "-front"
                        ? "Ícone Livro de C++"
                        : "Gueio mascote da CollabCode"
                }"
            onClick="handleClick()"
        />
    </article> 
`;


// const createMemoryCardFront = () => `
//         <article class="memory-card -front">
//             <img 
//                 class='icon' 
//                 src='img/icon-c.png' 
//                 alt='Livro C++'
//                 onClick="handleClick()"
//             />
//         </article> 
//     `;
 
const handleClick = () => console.log("oi");