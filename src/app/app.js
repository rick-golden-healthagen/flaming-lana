// app.js
//
// last-modified: <2014-01-16 19:23:35 golden@localhost>

angular.module( 'FlamingLana', [ 'templates-app',
                                 'templates-common',
                                 'FlamingLana.home',
                                 'FlamingLana.leakage',
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
                
                        function( event, toState, toParams, fromState, fromParams ) 
                        {
                            if ( angular.isDefined( toState.data.pageTitle ) ) 
                            {
                                $scope.pageTitle = toState.data.pageTitle + ' | flaming-lana' ;
                            }
                        });
        }
    );

