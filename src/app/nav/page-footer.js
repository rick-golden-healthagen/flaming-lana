angular.module( 'FlamingLana' )

    .directive( 
        
        "pageFooter",                                                            // <page-footer></page-footer>

        function ()
        {
            return {
                
                restrict:    "E",                                                // Element (not an Attribute)

                templateUrl: "nav/page-footer.tpl.html"                          // template file
            };
                    
        });

