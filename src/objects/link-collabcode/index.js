const linkCollabcode = (function() {
	const module = {};

	module._style = () => {
		$head = document.querySelector("head");
		$style = document.createElement("style");

		$style.textContent = `
                              .link-collabcode {
                                        display: block;
                                        margin-top: 40px;
                                        margin-bottom: 40px;
                                        text-decoration: none;
                                        text-align: right;
                                        color: #f25a70;
                                        font-size: 14px;
                                        opacity: 0.7;
                                      
                              }
                    `;

		$head.insertAdjacentElement("beforeend", $style);
	};

	module.render = ({ href, content }) => {
		module._style();

		return `<a class="link-collabcode" href="${href}">${content}</a>`;
	};

	return {
		render: module.render
	};
})();
