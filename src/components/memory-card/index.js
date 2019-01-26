const createMemoryCard = (nameClass, src , alt) => `
    <article class="memory-card ${nameClass}">
        <img 
            class="icon" 
            src=" ${src} " 
            alt=" ${alt} "
            onClick="handleClick()"
        />
    </article> 
`;
 
const handleClick = () => console.log("oi");