(function() {
          const { hash } = window.location;
          const paths = [];

          paths[""] = login;
          paths["#/signup"] = signup;
          paths["#/game"] = game;

          paths[hash]();


	// if (hash === "#/signup") {
	// 	signup();
	// } else {
	// 	login();
	// }

	// $signup();
})();
