$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/provider',
        dataType: 'JSON'
    }).done(function( response ) {

        response.provider.forEach(provider => {
            $('#tbl_provider').append(
                `<tr>
                    <td>${provider.provider_id}
                    <td>${provider.prov_name}
                    <td>${provider.addres}
                </tr>`
            )
        })

    });

    $('#create_provider').click(function(e){

        $('#create_provider_popup').show()

    })

    $('#create_provider_popup_close').click(function(e){

        $('#create_provider_popup').hide()

    })

    $('#cancel_create_provider').click(function(e){

        $('#create_provider_popup').hide()

    })

    $('#submit_create_provider').click(function(e){

        e.preventDefault()
        let data = {
            prov_name: $('#inpName').val(),
            addres: $('#inpAddres').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/provider/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Провайдер добавлен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

    $('#update_provider').click(function(e){

        $('#update_provider_popup').show()

    })

    $('#update_provider_popup_close').click(function(e){

        $('#update_provider_popup').hide()

    })

    $('#cancel_update_provider').click(function(e){

        $('#update_provider_popup').hide()

    })

    $('#submit_update_provider').click(function(e){

        e.preventDefault()
        let data = {
            provider_id: $('#inpUpid').val(),
            prov_name: $('#inpUpname').val(),
            addres: $('#inpUpaddres').val(),
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/provider/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Провайдер изменен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

    $('#delete_provider').click(function(e){

        $('#delete_provider_popup').show()

    })

    $('#delete_provider_popup_close').click(function(e){

        $('#delete_provider_popup').hide()

    })

    $('#cancel_delete_provider').click(function(e){

        $('#delete_provider_popup').hide()

    })

    $('#submit_delete_provider').click(function(e){

        e.preventDefault()
        let data = {
            provider_id: $('#inpId').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/provider/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Провайдер удален')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

    $(document).ready(function(){
        $('#group_provider').click(function(e){
            e.preventDefault()

            $.ajax({
                type: 'GET',
                url: '/api/provider/group',
                dataType: 'JSON'
            }).done(function( response ) {
                $('#tbl_gprovider').empty();
    
                response.product.forEach(product => {
                    $('#tbl_gprovider').append(
                        `<tr>
                            <td>${COUNT(provider.prov_name)}</td>
                            <td>${product.addres}</td>
                        </tr>`
                    );
                });
            });
    
        });
    });
})