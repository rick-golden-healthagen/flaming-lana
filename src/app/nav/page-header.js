// pageHeader.js
//
// Usage:  <page-header></page-header>
//
// create the app's header
//
// last-modified: <2014-01-16 10:42:08 golden@localhost>

angular.module( 'FlamingLana' )

    .directive( 

        "pageHeader",                                                            // <page-header>

        function ()
        {
            return {
                
                restrict:    "E",                                                // Element (not an Attribute)
                
                templateUrl: "nav/page-header.tpl.html"                          // template file
            };
            
        });

