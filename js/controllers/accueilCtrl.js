myApp.controller('AccueilCtrl', function($scope, $location, AccueilFactory){

	// Gestion du chargement
	$scope.loading = true;

	/*
	Pour gérer la réquête Ajax il faut utiliser la fonction 'then()'
	qui prend en callBack une fonction pour générer un message d'erreur
	*/
	$scope.posts = AccueilFactory.find().then(function(posts){
		// Gestion du chargement
		$scope.loading = false;
		
		$scope.posts = posts;

		// Fonction du menu
		$scope.menuGoAway = function(url){
			$location.path('/supports/' + url);

			console.log($(this).parent);
		}



	}, function(msg){
		// CallBack de la fonction 'then()'
		alert(msg);
	});

});