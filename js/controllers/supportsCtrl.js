myApp.controller('SupportsCtrl', function($scope, $routeParams, SupportsFactory, AccueilFactory){

	// Gestion du chargement
	$scope.loading = true;

	/*
	Pour gérer la réquête Ajax il faut utiliser la fonction 'then()'
	qui prend en callBack une fonction pour générer un message d'erreur
	*/
	$scope.posts = SupportsFactory.find().then(function(posts){
		// Gestion du chargement
		$scope.loading = false;
		
		$scope.posts = posts;

		/*
		Appel de la fonction 'get' de l'objet 'posts' avec 
		en paramètre l'id de l'article récupéré via la route
		*/
		AccueilFactory.get($routeParams.id).then(function(post){
			// Récupération du titre du post
			$scope.title = post.title;

		}, function(){
			deferred.reject('Impossible de récupérer les articles');
		});


	
	}, function(msg){
		// CallBack de la fonction 'then()'
		alert(msg);
	});

});

myApp.directive('slideToggle', function() {  
	return {

		link: function(scope, element, attr) {

			element.bind('click', function() {                  
				var $slideBox = $(element).next();
				var slideDuration = 250;				

				$slideBox.stop().slideToggle(slideDuration);

			});
		}

	};  
});