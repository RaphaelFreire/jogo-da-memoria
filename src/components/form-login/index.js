const formLogin = (function() {
	const module = {};

	module._style = () => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

		$style.textContent = `
                              .form-login{
                                        padding: 0 35px 40px;
                              }
                    `;

		$head.insertAdjacentElement("beforeend", $style);
	};

	module._children = () => {
		const $emailLabel = labelCollabcode.render("Username ou E-mail");
		const $emailInput = inputCollabcode.render({
			placeholder: "raphaelmachadofreire@gmail.com",
			type: "email"
		});

		const $passwordLabel = labelCollabcode.render("Password");
		const $passwordInput = inputCollabcode.render({
			placeholder: "*****",
			type: "password"
		});

		const $eyeCollabcode = eyeCollabcode.render();

		const $btn = btnCollabcode.render("Login");
		const $linkCollabcode = linkCollabcode.render({
			href: "/",
			content: "Esqueci minha senha"
		});

		return `
                              ${$emailLabel} ${$emailInput}
			${$passwordLabel} ${$passwordInput}
			${$eyeCollabcode}
                              ${$linkCollabcode}
                              ${$btn}
                              
                    `;
	};

	module.render = () => {
		module._style();

		return `
                              <form class="form-login" action="" method="POST">${module._children()}</form>
                    `;
	};

	return {
		render: module.render
	};
})();
