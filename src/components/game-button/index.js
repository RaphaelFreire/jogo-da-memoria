const gameButton = (function() {
	const module = {};

	module._style = () => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

		$style.textContent = `
        .game-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 3px solid #fffcee;
          box-sizing: border-box;
          position: absolute;
          bottom: 85px;
          left: 50%;
          transform: translate(-50%, 50%);
          background-color: #2ed573;
          color: #fffcee;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 0.8em;
          cursor: pointer;
          box-shadow: 0px 2px 1px #3a4042;
        }
      `;

		$head.insertBefore($style, null);
	};

	module.render = content => {
		module._style();

		return `
        <button class="game-button">${content}</button>
      `;
	};

	return {
		render: module.render,
		handleClick: module.handleClick
	};
})();
