// page-footer.js
//
// Usage:  <page-footer></page-footer>
//
// An AngluarJS directive for creating the application's footer.
//
// last-modified: <2014-01-21 15:16:04 golden@golden-garage.net>

angular.module( 'SNA' )

    .directive( 
        
        "pageFooter",                                                            // <page-footer></page-footer>

        function ()
        {
            return {
                
                restrict:    "E",                                                // Element (not an Attribute)

                templateUrl: "layout/page-footer.tpl.html"                       // template file
            };
                    
        });

