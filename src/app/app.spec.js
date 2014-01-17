// app.spec.js
//
// last-modified: <2014-01-16 11:13:39 golden@localhost>

describe( 

    'AppControl', 

    function() 
    {
        describe( 

            'isCurrentUrl', 

            function() 
            {
                var AppCtrl, $location, $scope;

                beforeEach( module( 'FlamingLana' ) );

                beforeEach( 
                    inject( 
                        function( $controller, _$location_, $rootScope ) 
                        {
                            $location  = _$location_;
                            $scope     = $rootScope.$new();
                            AppControl = $controller( 'AppControl', { $location: $location, $scope: $scope } );
                        }));

                it( 'should pass a dummy test', 
                    inject( 
                        function() 
                        {
                            expect( AppControl ).toBeTruthy();
                        }));
  });
});
