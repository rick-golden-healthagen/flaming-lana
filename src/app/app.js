// app.js
//
// An AngularJS module for the application container.
//
// last-modified: <2014-01-21 15:18:49 golden@golden-garage.net>

angular.module( 'SNA', [ 'templates-app',
                         'templates-common',
                         'SNA.home',
                         'SNA.leakage',
                         'ui.bootstrap',
                         'ui.router'
                       ] )

    .config( 

        function myAppConfig ( $stateProvider, $urlRouterProvider ) 
        {
            $urlRouterProvider.otherwise( '/home' );
        } 
    )

    .run( 

        function run () 
        {
        } 
    )


    .controller( 

        'AppControl', 

        function AppControl ( $scope, $location ) 
        {
            $scope.$on( '$stateChangeSuccess', 
                
                        function ( event, toState, toParams, fromState, fromParams ) 
                        {
                            if ( angular.isDefined( toState.data.pageTitle ) ) 
                            {
                                $scope.pageTitle = 'SNA | ' + toState.data.pageTitle;
                            }
                        });
        }
    );
