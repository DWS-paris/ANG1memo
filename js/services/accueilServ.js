myApp.factory('AccueilFactory', function($http, $q){
	var factory = {

		posts: false,

		find: function(){
			// Définition d'une variable de gestion du temps avec '$q.defer()'
			var deferred = $q.defer();

			// La requête Ajax s'exécute avec les fonction '.get()', '.success()' et '.error()'
			$http.get('json/accueil.json')
			.success(function(data, status){
				// La variable 'factory.posts' permet de stocker les données
				factory.posts = data;
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

			return deferred.promise;
		},
		// La paramètre 'get' est une fonction qui renvoie l'id des posts
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