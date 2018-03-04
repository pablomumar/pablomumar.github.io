$( function() {
    $( "#spinner" ).spinner({
        spin: function( event, ui ) {
            if ( ui.value > 20 ) {
                $( this ).spinner( "value", 0 );
                return false;
            } else if ( ui.value < 0 ) {
                $( this ).spinner( "value", 20 );
                return false;
            }
        }
    });
} );