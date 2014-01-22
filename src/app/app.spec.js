// app.spec.js
//
// The unit tests for the application container.
//
// last-modified: <2014-01-21 15:20:06 golden@golden-garage.net>

describe( 'AppControl', 
          function() 
          {
              
              describe( 'isCurrentUrl', 
                        function() 
                        {
                            var AppCtrl, $location, $scope;

                            beforeEach( module( 'SNA' ) );

                            beforeEach( 
                                inject( 
                                    function( $controller, _$location_, $rootScope ) 
                                    {
                                         $location = _$location_;
                                            $scope = $rootScope.$new();

                                        AppControl = $controller( 'AppControl', { $location: $location, 
                                                                                     $scope: $scope     } );
                                    }));

                            it( 'should pass a dummy test', 
                                inject( 
                                    function() 
                                    {
                                        expect( AppControl ).toBeTruthy();
                                    }));
                        });
          });
