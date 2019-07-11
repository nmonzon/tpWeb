

$( document ).ready(function() {
    console.log( "ready!" );

    $('#abrir-modal').click(function () {
    
        $('#miModal').show('slow',function () {
        console.log("pasa por show");
        })
        $('#sombraModal').show('slow',function () {
            
            })
    });
    
    $('#cerrarModal').click(function () {
        
        $('#miModal').hide('slow',function () {
            console.log("pasa por hide");
        })

        $('#sombraModal').hide('slow',function () {
            
        })
    });

});

