myApp.controller('HeaderCtrl', function($scope, $http, $location, AccueilFactory){

	/*
	Pour gérer la réquête Ajax il faut utiliser la fonction 'then()'
	qui prend en callBack une fonction pour générer un message d'erreur
	*/
	$scope.posts = AccueilFactory.find().then(function(posts){
		// Gestion du chargement
		$scope.loading = false;
		
		$scope.posts = posts;

		$scope.title = "Hives of knowledge";
		$scope.subTitle = "Mémento du développeur Web";
		$scope.titleBurger = "Catégories";

		// Fonction du burger menu
		$scope.burgerGoAway = function(url){

			$('#burgerMenu').fadeOut();
			$('#closeBurger').fadeOut(function(){
				$('#burgerBtn').fadeIn();
			});

			$location.path('/supports/' + url)
		}


	}, function(msg){
		// CallBack de la fonction 'then()'
		alert(msg);
	});

});