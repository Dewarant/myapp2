$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/roles',
        dataType: 'JSON'
    }).done(function( response ) {

        response.roles.forEach(roles => {
            $('#tbl_roles').append(
                `<tr>
                    <td>${roles.id}
                    <td>${roles.code}
                    <td>${roles.label}
                </tr>`
            )
        })

    });

    $('#create_roles').click(function(e){

        $('#create_roles_popup').show()

    })

    $('#create_roles_popup_close').click(function(e){

        $('#create_roles_popup').hide()

    })

    $('#cancel_create_roles').click(function(e){

        $('#create_roles_popup').hide()

    })

    $('#submit_create_roles').click(function(e){

        e.preventDefault()
        let data = {
            code: $('#incode').val(),
            label: $('#inlabel').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/roles/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('роль добавлена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

    $('#update_roles').click(function(e){

        $('#update_roles_popup').show()

    })

    $('#update_roles_popup_close').click(function(e){

        $('#update_roles_popup').hide()

    })

    $('#cancel_update_roles').click(function(e){

        $('#update_roles_popup').hide()

    })

    $('#submit_update_roles').click(function(e){

        e.preventDefault()
        let data = {
            id: $('#inpUpid').val(),
            code: $('#inpUpcode').val(),
            label: $('#inpUplabel').val(),
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/roles/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Роль изменена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

    $('#delete_roles').click(function(e){

        $('#delete_roles_popup').show()

    })

    $('#delete_roles_popup_close').click(function(e){

        $('#delete_roles_popup').hide()

    })

    $('#cancel_delete_roles').click(function(e){

        $('#delete_roles_popup').hide()

    })

    $('#submit_delete_roles').click(function(e){

        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/roles/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Роль удалена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })
})