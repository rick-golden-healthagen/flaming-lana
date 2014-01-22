// page-header.js
//
// Usage:  <page-header></page-header>
//
// An AngluarJS directive for creating the application's header.
//
// last-modified: <2014-01-21 15:16:40 golden@golden-garage.net>

angular.module( 'SNA' )

    .directive( 

        "pageHeader",                                                            // <page-header>

        function ()
        {
            return {
                
                restrict:    "E",                                                // Element (not an Attribute)
                
                templateUrl: "layout/page-header.tpl.html"                       // template file
            };
            
        });

