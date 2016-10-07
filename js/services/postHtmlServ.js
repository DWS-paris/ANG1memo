myApp.factory('PostHtmlFactory', function($http, $q){
	var factory = {

		posts: false,

		getPosts: function(){
			// Définition d'une variable de gestion du temps avec '$q.defer()'
			var deferred = $q.defer();

			// Virifier si les données ont déjà été chargées
			if(factory.posts != false){
				deferred.resolve(factory.posts);

			} else {
				// La requête Ajax s'exécute avec les fonction '.get()', '.success()' et '.error()'
				$http.get('https://spreadsheets.google.com/feeds/list/1vWmav8YusujGN7idSOabeh51khli-hwZp1tOSQQxh0g/od6/public/values?alt=json')
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
			};

			return deferred.promise;
		},
		// La paramètre 'getPostId' est une fonction quxi renvoie l'id des posts
		getPostId: function(id){

			// Définition d'une variable de gestion du temps avec '$q.defer()'
			var deferred = $q.defer();

			// Création d'un objet vide
			var post = {};
			var posts = factory.getPosts().then(function(posts){
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