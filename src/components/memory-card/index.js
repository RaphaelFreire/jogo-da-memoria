function memoryCard() {
     const $head = document.querySelector("head");
     const $style = document.createElement("style");

     console.log("dentro do arquivo memory-card e fora da arrow-function");

     $style.textContent = `
        .memory-card{
            width: 155px;
            height: 155px;
            position: relative;
        }

        .memory-card .card {
            width: 100%;
            height: 100%;
            background-color: #f25a70;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
            cursor: pointer;
            position: absolute;
        }

        .memory-card.-active .card{
            display: none;
        }

        .memory-card.-active .card.-front{
            display: flex;
        }

        .memory-card .card.-front{
            background-color: #fff;
            display:flex;
        }

        .card.-front::before{
            content: "";
            width: 95px;
            height: 95px;
            background-color: #d4ded4;
            border-radius: 50%;
            position: absolute;
        }   

       .card > .icon {
            width: 100px;
            height: 100px;
        }

        .card.-front > .icon{
            position: absolute;
            transform: translateY(-12px);
        }
    `;

     $head.insertBefore($style, null);

     return ({ nameClass, src, alt }) => `
        <div class="memory-card" onClick="handleClick(this)">
            <article class="card -front">
                <img
                    class="icon" 
                    src="${src}" 
                    alt="${alt}"
                />
            </article>
            <article class="card">
                <img 
                    class="icon" 
                    src="img/icon-collabcode.svg" 
                    alt="O mascote da CollabeCode o Gaio"
                />
            </article> 
        </div>
     `;
}

const handleClick = $component => {
     $component.classList.toggle("-active");
};
