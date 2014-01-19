// leakage.js
//
// last-modified: <2014-01-19 00:57:57 golden@localhost>

angular.module( 'FlamingLana.leakage', [ 'ui.router',
                                         'placeholders',
                                         'ui.bootstrap'
                                       ] )

    .config( 

        function config( $stateProvider ) 
        {
            $stateProvider.state( 
                
                'leakage', 
                
                {
                    url: '/leakage',
                    
                    views: 
                    {
                        main: 
                        {
                             controller: 'LeakageControl',
                            templateUrl: 'routes/leakage/leakage.tpl.html'
                        }
                    },
                    
                    data: 
                    { 
                        pageTitle: 'LEAKAGE' 
                    }
                    
                });
        })

    .controller( 

        'LeakageControl', 

        function LeakageControl( $scope ) 
        {
            $scope.CLAIM_ID       = 0;
            $scope.AMOUNT         = 1;
            $scope.NETWORK_FLAG   = 2;
            $scope.PATIENT_TYPE   = 3;
            $scope.PHYSICIAN_TYPE = 4;
            $scope.SERVICE_TYPE   = 5;
            $scope.DATE           = 6;

            var data = [

                // claimId,    amount,   network,   patient,  physician,  service,  date
                [  '00000',     13.23,     'I',       'M',       'E',       'O',    moment( "2013-09-01" ) ],
                [  '00001',     19.37,     'I',       'M',       'A',       'N',    moment( "2013-10-02" ) ],
                [  '00002',     64.65,     'O',       'U',       'A',       'O',    moment( "2013-11-03" ) ],
                [  '00003',     79.02,     'O',       'M',       'E',       'O',    moment( "2013-12-04" ) ],
                [  '00004',     34.08,     'I',       'M',       'E',       'O',    moment( "2013-11-05" ) ],
                [  '00005',      7.29,     'I',       'M',       'A',       'N',    moment( "2013-11-06" ) ],
                [  '00006',    111.10,     'O',       'M',       'A',       'O',    moment( "2013-11-07" ) ],
                [  '00007',     21.58,     'O',       'M',       'E',       'O',    moment( "2013-11-08" ) ],
                [  '00008',     90.95,     'I',       'M',       'E',       'O',    moment( "2013-11-09" ) ],
                [  '00009',     51.54,     'I',       'U',       'E',       'N',    moment( "2013-11-10" ) ],
                [  '00010',     45.91,     'I',       'M',       'A',       'O',    moment( "2013-12-01" ) ],
                [  '00011',      5.36,     'I',       'M',       'A',       'N',    moment( "2013-12-02" ) ],
                [  '00012',    180.89,     'O',       'M',       'E',       'O',    moment( "2013-12-03" ) ],
                [  '00013',     66.47,     'I',       'M',       'E',       'O',    moment( "2013-12-04" ) ],
                [  '00014',     54.28,     'I',       'M',       'E',       'O',    moment( "2013-12-05" ) ],
                [  '00015',     86.91,     'O',       'M',       'A',       'N',    moment( "2013-12-06" ) ],
                [  '00016',     56.64,     'O',       'U',       'A',       'O',    moment( "2013-12-07" ) ],
                [  '00017',     42.78,     'I',       'M',       'E',       'O',    moment( "2013-12-08" ) ],
                [  '00018',      6.52,     'O',       'M',       'E',       'O',    moment( "2013-12-09" ) ],
                [  '00019',    197.15,     'I',       'M',       'E',       'N',    moment( "2013-12-10" ) ],
                [  '00020',     54.89,     'I',       'M',       'A',       'O',    moment( "2014-01-01" ) ],
                [  '00021',     21.67,     'I',       'M',       'A',       'N',    moment( "2014-01-02" ) ],
                [  '00022',     62.67,     'O',       'M',       'E',       'O',    moment( "2014-01-03" ) ],
                [  '00023',     60.37,     'I',       'U',       'E',       'O',    moment( "2014-01-04" ) ],
                [  '00024',     51.91,     'I',       'M',       'E',       'O',    moment( "2014-01-05" ) ],
                [  '00025',     43.52,     'I',       'M',       'A',       'N',    moment( "2014-01-06" ) ],
                [  '00026',     99.56,     'I',       'M',       'A',       'O',    moment( "2014-01-07" ) ],
                [  '00027',     87.30,     'I',       'M',       'E',       'O',    moment( "2014-01-08" ) ],
                [  '00028',      5.17,     'I',       'M',       'E',       'O',    moment( "2014-01-09" ) ],
                [  '00029',    135.64,     'O',       'M',       'E',       'N',    moment( "2014-01-10" ) ],
                [  '00030',     45.05,     'I',       'U',       'A',       'O',    moment( "2014-02-01" ) ],
                [  '00031',     18.41,     'I',       'M',       'A',       'N',    moment( "2014-02-02" ) ],
                [  '00032',     55.02,     'I',       'M',       'E',       'O',    moment( "2014-02-03" ) ],
                [  '00033',      9.71,     'I',       'M',       'E',       'O',    moment( "2014-02-04" ) ],
                [  '00034',     97.43,     'I',       'M',       'E',       'O',    moment( "2014-02-05" ) ],
                [  '00035',     89.11,     'I',       'M',       'A',       'N',    moment( "2014-02-06" ) ],
                [  '00036',     17.00,     'O',       'M',       'A',       'O',    moment( "2014-02-07" ) ],
                [  '00037',      8.54,     'I',       'U',       'E',       'O',    moment( "2014-02-08" ) ],
                [  '00038',     10.69,     'I',       'M',       'E',       'O',    moment( "2014-02-09" ) ],
                [  '00039',      7.96,     'I',       'M',       'E',       'N',    moment( "2014-03-10" ) ],
                [  '00040',     60.09,     'I',       'M',       'A',       'O',    moment( "2014-03-01" ) ],
                [  '00041',     56.61,     'I',       'M',       'A',       'N',    moment( "2014-03-02" ) ],
                [  '00042',     13.32,     'I',       'M',       'E',       'O',    moment( "2014-03-03" ) ],
                [  '00043',     40.98,     'O',       'M',       'E',       'O',    moment( "2014-03-04" ) ],
                [  '00044',     23.08,     'I',       'U',       'E',       'O',    moment( "2014-03-05" ) ],
                [  '00045',     67.61,     'I',       'M',       'A',       'N',    moment( "2014-03-06" ) ],
                [  '00046',     27.90,     'I',       'M',       'A',       'O',    moment( "2014-03-07" ) ],
                [  '00047',     79.73,     'I',       'M',       'E',       'O',    moment( "2014-03-08" ) ],
                [  '00048',     10.39,     'I',       'M',       'E',       'O',    moment( "2014-03-09" ) ],
                [  '00049',     34.42,     'I',       'M',       'E',       'N',    moment( "2014-04-10" ) ],
                [  '00050',     76.88,     'O',       'M',       'A',       'O',    moment( "2014-04-01" ) ],
                [  '00051',     65.29,     'I',       'U',       'A',       'N',    moment( "2014-04-02" ) ],
                [  '00052',     56.09,     'I',       'M',       'E',       'O',    moment( "2014-04-03" ) ],
                [  '00053',     39.55,     'I',       'M',       'E',       'O',    moment( "2014-04-04" ) ],
                [  '00054',     25.66,     'I',       'M',       'E',       'O',    moment( "2014-04-05" ) ],
                [  '00055',      8.00,     'I',       'M',       'A',       'N',    moment( "2014-04-06" ) ],
                [  '00056',     83.08,     'I',       'M',       'A',       'O',    moment( "2014-04-07" ) ],
                [  '00057',     25.23,     'O',       'M',       'E',       'O',    moment( "2014-04-08" ) ],
                [  '00058',     95.31,     'I',       'U',       'E',       'O',    moment( "2014-04-09" ) ],
                [  '00059',     88.25,     'I',       'M',       'E',       'N',    moment( "2014-05-10" ) ],
                [  '00060',     60.88,     'I',       'M',       'A',       'O',    moment( "2014-05-01" ) ],
                [  '00061',     40.36,     'I',       'M',       'A',       'N',    moment( "2014-05-02" ) ],
                [  '00062',      6.66,     'I',       'M',       'E',       'O',    moment( "2014-05-03" ) ],
                [  '00063',    115.90,     'I',       'M',       'E',       'O',    moment( "2014-05-04" ) ],
                [  '00064',     50.08,     'O',       'M',       'E',       'O',    moment( "2014-05-05" ) ],
                [  '00065',      4.09,     'I',       'U',       'A',       'N',    moment( "2014-05-06" ) ],
                [  '00066',     15.01,     'I',       'M',       'A',       'O',    moment( "2014-05-07" ) ],
                [  '00067',   1067.08,     'I',       'M',       'E',       'O',    moment( "2014-05-08" ) ],
                [  '00068',     12.64,     'I',       'M',       'E',       'O',    moment( "2014-05-09" ) ],
                [  '00069',     15.71,     'I',       'M',       'E',       'N',    moment( "2014-06-10" ) ],
                [  '00070',     75.05,     'I',       'M',       'A',       'O',    moment( "2014-07-01" ) ],
                [  '00071',     72.73,     'O',       'M',       'A',       'N',    moment( "2014-07-02" ) ],
                [  '00072',     72.32,     'I',       'U',       'E',       'O',    moment( "2014-07-03" ) ],
                [  '00073',     88.38,     'I',       'M',       'E',       'O',    moment( "2014-07-04" ) ],
                [  '00074',     13.71,     'I',       'M',       'E',       'O',    moment( "2014-07-05" ) ],
                [  '00075',     95.41,     'I',       'M',       'A',       'N',    moment( "2014-07-06" ) ],
                [  '00076',     55.99,     'I',       'M',       'A',       'O',    moment( "2014-07-07" ) ],
                [  '00077',     41.61,     'I',       'M',       'E',       'O',    moment( "2014-07-08" ) ],
                [  '00078',     75.14,     'O',       'M',       'E',       'O',    moment( "2014-07-09" ) ],
                [  '00079',     66.38,     'I',       'U',       'E',       'N',    moment( "2014-07-10" ) ],
                [  '00080',     76.04,     'I',       'M',       'A',       'O',    moment( "2014-08-01" ) ],
                [  '00081',     52.03,     'I',       'M',       'A',       'N',    moment( "2014-08-02" ) ],
                [  '00082',     31.68,     'I',       'M',       'E',       'O',    moment( "2014-08-03" ) ],
                [  '00083',     32.13,     'I',       'M',       'E',       'O',    moment( "2014-08-04" ) ],
                [  '00084',     91.58,     'I',       'M',       'E',       'O',    moment( "2014-08-05" ) ],
                [  '00085',     57.34,     'I',       'M',       'A',       'N',    moment( "2014-08-06" ) ],
                [  '00086',     40.14,     'I',       'U',       'A',       'O',    moment( "2014-08-07" ) ],
                [  '00087',     74.66,     'O',       'M',       'E',       'O',    moment( "2014-08-08" ) ],
                [  '00088',     82.58,     'I',       'M',       'E',       'O',    moment( "2014-08-09" ) ],
                [  '00089',     35.45,     'I',       'M',       'E',       'N',    moment( "2014-08-10" ) ]
            ];

            $scope.data = data;

            $scope.isPatManagedSelected    = true;
            $scope.isPatUnmanagedSelected  = true;
            $scope.isPhyEmployedSelected   = true;
            $scope.isPhyAffiliatedSelected = true;
            $scope.isSvcOfferedSelected    = true;
            $scope.isSvcNotOfferedSelected = true;


            var calcMonthlyTotals = function( patM, patU, phyE, phyA, svcO, svcN )
            {
                var retVal = data.reduce ( 
                    function ( result, element )
                    {
                        var month = element[ $scope.DATE ].startOf( 'month' );

                        if ( ! result[ month ] ) { result[ month ] = [ 0, 0, 0 ]; }


                        if ( ! ( patM || patU ) ) { return result; }

                        var isManagedPatient   = element[ $scope.PATIENT_TYPE ] === "M";
                        var isUnmanagedPatient = element[ $scope.PATIENT_TYPE ] === "U";
                        
                        if ( ( patM !== isManagedPatient ) && ( patU !== isUnmanagedPatient ) ) { return result; }


                        if ( ! ( phyE || phyA ) ) { return result; }

                        var isEmployedPhysician   = element[ $scope.PHYSICIAN_TYPE ] === "E";
                        var isAffiliatedPhysician = element[ $scope.PHYSICIAN_TYPE ] === "A";
                        
                        if ( ( phyE !== isEmployedPhysician ) && ( phyA !== isAffiliatedPhysician ) ) { return result; }


                        if ( ! ( svcO || svcN ) ) { return result; }

                        var isOfferedService    = element[ $scope.SERVICE_TYPE ] === "O";
                        var isNotOfferedService = element[ $scope.SERVICE_TYPE ] === "N";
                        
                        if ( ( svcO !== isOfferedService ) && ( svcN !== isNotOfferedService ) ) { return result; }


                        result[ month ][0] += 1;

                        var isInNetwork    = element[ $scope.NETWORK_FLAG ] === "I";
                        var isOutOfNetwork = element[ $scope.NETWORK_FLAG ] === "O";
                        
                        if ( isInNetwork    ) { result[ month ][1] += element[ $scope.AMOUNT ]; }
                        if ( isOutOfNetwork ) { result[ month ][2] += element[ $scope.AMOUNT ]; }

                        return result;

                    }, {}
                );

                return retVal;
            };

            $scope.calcMonthlyTotals = calcMonthlyTotals;

            
            var mapReduceTotal = function( data, idx, val )
            {
                var d = data.filter (
                    function ( element )
                    {
                        return element[ idx ] === val;
                    } 
                );

                var total = d.reduce ( 
                    function ( t, element )
                    {
                        return t + element[ $scope.AMOUNT ];

                    }, 0
                );

                return total;
            };


            $scope.totalInNetwork    = mapReduceTotal( data, $scope.NETWORK_FLAG,   "I" );
            $scope.totalOutOfNetwork = mapReduceTotal( data, $scope.NETWORK_FLAG,   "O" );
            

            {
                var inData = data.filter ( 
                    function ( element )
                    {
                        return element[ $scope.NETWORK_FLAG ] === "I";
                    } 
                );

                $scope.totalManagedIn      = mapReduceTotal( inData, $scope.PATIENT_TYPE,   "M" );
                $scope.totalUnmanagedIn    = mapReduceTotal( inData, $scope.PATIENT_TYPE,   "U" );

                $scope.totalEmployedIn     = mapReduceTotal( inData, $scope.PHYSICIAN_TYPE, "E" );
                $scope.totalAffiliatedIn   = mapReduceTotal( inData, $scope.PHYSICIAN_TYPE, "A" );

                $scope.totalOfferedIn      = mapReduceTotal( inData, $scope.SERVICE_TYPE,   "O" );
                $scope.totalNotOfferedIn   = mapReduceTotal( inData, $scope.SERVICE_TYPE,   "N" );
            }

            {
                var outData = data.filter ( 
                    function ( element )
                    {
                        return element[ $scope.NETWORK_FLAG ] === "O";
                    } 
                );

                $scope.totalManagedOut      = mapReduceTotal( outData, $scope.PATIENT_TYPE,   "M" );
                $scope.totalUnmanagedOut    = mapReduceTotal( outData, $scope.PATIENT_TYPE,   "U" );
                
                $scope.totalEmployedOut     = mapReduceTotal( outData, $scope.PHYSICIAN_TYPE, "E" );
                $scope.totalAffiliatedOut   = mapReduceTotal( outData, $scope.PHYSICIAN_TYPE, "A" );
                
                $scope.totalOfferedOut      = mapReduceTotal( outData, $scope.SERVICE_TYPE,   "O" );
                $scope.totalNotOfferedOut   = mapReduceTotal( outData, $scope.SERVICE_TYPE,   "N" );
            }


            var minDate = moment('2099-12-31');
            var maxDate = moment('2000-01-01');

            data.forEach( 
                function ( element, index, array )
                {
                    var date  = element[ $scope.DATE ];
                    var som   = date.startOf( 'month' );

                    if ( som < minDate ) { minDate = date; }
                    if ( som > maxDate ) { maxDate = date; }
                } 
            );


            $scope.minDate = minDate;
            $scope.maxDate = maxDate;



            var calcMonths = function ( startDate, numberOfMonths )
            {
                var month = moment( startDate ).startOf( "month" );

                var months = [ moment( month ) ];

                for ( var i = 1; i < numberOfMonths; i++ ) 
                { 
                    month.add( "months", 1 );

                    months.push( moment( month ) );
                }

                return months;
            };

            $scope.calcMonths = calcMonths;

            // $scope.months = calcMonths( moment( "2013-11" ), 12 );

        } );
