/*GeoAPI KEY: a7d12a7e8a3d24289be77e6327045051edb5379c9d2934a71220e0051bc31594*/
const apikey = 'a7d12a7e8a3d24289be77e6327045051edb5379c9d2934a71220e0051bc31594';

var listaComunidades = [];

$( function() {
    var cache = {};
    $( "#comunidad" ).autocomplete({
        minLength: 1,
        source: function( request, response ) {

            var term = request.term;
            var url = 'https://apiv1.geoapi.es/comunidades?type=JSON&key=' + apikey + '&sandbox=0';
            if ( term in cache ) {
                response( cache[ term ] );
                return;
            }

            $.getJSON( url, request, function( data ) {
                var x = -1;
                $.each(data.data, function () {
                    x++;
                    listaComunidades.push(data.data[x].COM);
                    response(listaComunidades)
                })
            });
        }
    });
} );

