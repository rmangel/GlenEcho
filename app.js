// app.js

// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'home/content.html',
            controller: 'homeController'
        })
        .when('/lodging',{
            templateUrl: 'lodging/lodging.html',
            controller: 'lodgeController'


        })
        .when('/sporting',{
            templateUrl: 'sporting/sporting.html',
            controller: 'sportingController'


        })
        .when('/food',{
            templateUrl: 'food/eatsanddrinks.html',
            controller: 'foodController'


        })
        .when('/store',{
            templateUrl: 'store/convenience.html',
            controller: 'storeController'


        })
        .when('/pictures',{
            templateUrl: 'pictures/pictures.html',
            controller: 'picturesController'

        })
        .when('/specialevents',{
            templateUrl: 'specialevents/specialevents.html',
            controller: 'specialEventsController'

        })
        ;

        // // about page
        // .when('/about', {
        //     templateUrl: 'page-about.html',
        //     controller: 'aboutController'
        // })

        // // contact page
        // .when('/contact', {
        //     templateUrl: 'contact/page-contact.html',
        //     controller: 'contactController'
        // });

});


// CONTROLLERS ============================================
// home page controller
animateApp.controller('homeController', function($scope) {
    $scope.pageClass = 'content';
});

animateApp.controller('lodgeController', function($scope) {
    $scope.pageClass = 'lodging';
});


animateApp.controller('sportingController', function($scope) {
    $scope.pageClass = 'sporting';
});

animateApp.controller('foodController', function($scope) {
    $scope.pageClass = 'eatsanddrinks';
});

animateApp.controller('storeController', function($scope) {
    $scope.pageClass = 'convenience';
});

animateApp.controller('picturesController', function($scope) {
    $scope.pageClass = 'pictures';
});

animateApp.controller('specialEventsController', function($scope) {
    $scope.pageClass = 'specialevents';
});
// // about page controller
// animateApp.controller('aboutController', function($scope) {
//     $scope.pageClass = 'page-about';
// });

// // contact page controller
// animateApp.controller('contactController', function($scope) {
//     $scope.pageClass = 'page-contact';
// });