// home.js
//
// last-modified: <2014-01-16 13:25:07 golden@localhost>

angular.module( 'FlamingLana.home', [ 'ui.router'
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
                            templateUrl: 'routes/home/home.tpl.html'
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

