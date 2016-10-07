myApp.factory('SupportsFactory', function($http, $q, $routeParams, AccueilFactory){
	var factory = {

		posts: false,

		find: function(){
			// Définition d'une variable de gestion du temps avec '$q.defer()'
			var deferred = $q.defer();


			AccueilFactory.get($routeParams.id).then(function(post){
				// Récupération du flux du supports
				var supportFlux = post.flux;

				// La requête Ajax s'exécute avec les fonction '.get()', '.success()' et '.error()'
				$http.get(supportFlux)
				.success(function(data, status){
					// La variable 'factory.posts' permet de stocker les données
					factory.posts = data.feed.entry;
					/*
					La fonction 'resolve()' du service '$q' permet  
					d'indiquer que la requête Ajax à fonctionnée
					*/
					deferred.resolve(factory.posts);

				}).error(function(data, status){
					/*
					La fonction 'reject()' du service '$q' permet  
					d'indiquer que la requête Ajax à échouée
					*/
					deferred.reject('Impossible de récupérer les articles');

				});

			}, function(){
				deferred.reject('Impossible de récupérer les articles');
			});


				

			return deferred.promise;
		},
		// La paramètre 'get' est une fonction quxi renvoie l'id des posts
		get: function(id){

			// Définition d'une variable de gestion du temps avec '$q.defer()'
			var deferred = $q.defer();

			// Création d'un objet vide
			var post = {};
			var posts = factory.find().then(function(posts){
				// Fonction forEach AngularJS
				angular.forEach(posts, function(value, key){
					// Vérification de la correspondance des id
					if(value.id == id){
						// Incrémentation de l'objet "post"
						post = value;
					};
				});
				deferred.resolve(post);
			}, function(msg){
				deferred.reject('Impossible de récupérer les articles');
			});
			return deferred.promise;

			

			// Revoie de l'objet 'post' dans l'application
			return post;
		}
	};
	return factory;
});