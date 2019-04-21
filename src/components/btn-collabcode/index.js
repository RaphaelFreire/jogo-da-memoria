const btnCollabcode = (function() {
	const module = {};

	module._style = () => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

		$style.textContent = `
                        .btn-collabcode{
                                width: 100%;
                                height: 50px;
                                border-radius: 25px;
                                color: #fff;
                                font-size: 14px;
                                text-transform: uppercase;
                                background-color: #f25a70;
                                cursor: pointer;
                        }

                        .input-collabcode + .btn-collabcode{
                                margin-top: 45px;
                        }
                `;

		$head.insertAdjacentElement("beforeend", $style);
	};

	module.render = content => {
		module._style();

		return `<input class="btn-collabcode" type="submit" value="${content}">`;
	};

	return {
		render: module.render
	};
})();
