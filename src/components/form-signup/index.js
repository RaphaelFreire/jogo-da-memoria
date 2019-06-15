const formSignup = (function() {
	const module = {};

	module._style = () => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

		$style.textContent = `
			.form-signup{
				padding: 0 35px 40px;
			}
		`;

		$head.insertAdjacentElement("beforeend", $style);
	};

	module._children = () => {
		const $emailLabel = labelCollabcode.render("E-mail");
		const $emailInput = inputCollabcode.render({
			id: "email",
			placeholder: "raphaelfreire@gmail.com",
			type: "email"
		});

		const $usernameLabel = labelCollabcode.render("Username:");
		const $usernameInput = inputCollabcode.render({
			placeholder: "Raphael"
		});

		const $passwordLabel = labelCollabcode.render("Password");
		const $passwordInput = inputCollabcode.render({
			id: "password",
			placeholder: "*******",
			type: "password"
		});

		const $confirmpasswordLabel = labelCollabcode.render(
			"Confirm Password"
		);
		const $confirmpasswordInput = inputCollabcode.render({
			id: "confirm",
			placeholder: "*******",
			type: "password"
		});

		const $btn = btnCollabcode.render({
			content: "Signup",
			path: "login"
		});

		return `
			${$emailLabel} ${$emailInput}
			${$usernameLabel} ${$usernameInput}
			${$passwordLabel} ${$passwordInput}
			${$confirmpasswordLabel} ${$confirmpasswordInput}
			${$btn}
		`;
	};

	module.render = () => {
		module._style();

		return `
			<form class="form-signup" action="" method="POST">${module._children()}</form>
			`;
	};

	return {
		render: module.render
	};
})();
