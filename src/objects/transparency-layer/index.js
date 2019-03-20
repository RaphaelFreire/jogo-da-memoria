const transparencyLayer = (function() {
	const module = {};

	module._style = () => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

		$style.textContent = `
      .transparency-layer {
        background-color: rgb(58, 64, 66, 0.5);
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        transition: opacity 200ms 350ms linear;
      }

      .transparency-layer.-disable{
        opacity: 0;
      }
    `;

		$head.insertBefore($style, null);
	};

	module.render = () => {
		module._style();

		return `
      <div class="transparency-layer"></div>
    `;
	};

	return {
		render: module.render
	};
})();
