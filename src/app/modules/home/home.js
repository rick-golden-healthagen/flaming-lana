// home.js
//
// An AngularJs module for the application's landing page.
//
// last-modified: <2014-01-21 14:59:32 golden@golden-garage.net>

angular.module( 'SNA.home', [ 'ui.router'
                            ])

    .config(

        function config( $stateProvider ) 
        {
            $stateProvider.state( 

                'home', 

                {
                    url: '/home',

                    views: 
                    {
                        main: 
                        {
                             controller: 'HomeControl',
                            templateUrl: 'modules/home/home.tpl.html'
                        }
                    },

                    data:
                    { 
                        pageTitle: 'HOME' 
                    }
                });
        })

    .controller( 

        'HomeControl', 

        function HomeController( $scope )
        {
        })

;

