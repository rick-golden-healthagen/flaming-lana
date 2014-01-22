// home.spec.js
//
// Unit tests for the home module.
//
// last-modified: <2014-01-21 15:11:53 golden@golden-garage.net>

describe( 'home section', 
          function() 
          {

              beforeEach( module( 'SNA.home' ) );


              it( 'should have a dummy test', 
                  inject( 
                      function() 
                      {
                          expect( true ).toBeTruthy();
                      }));
              
          });

