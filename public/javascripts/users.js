$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/users',
        dataType: 'JSON'
    }).done(function( response ) {

        response.users.forEach(users => {
            $('#tbl_users').append(
                `<tr>
                    <td>${users.user_id}
                    <td>${users.login}
                    <td>${users.username}
                    <td>${users.role_label}
                    <td>${users.email}
                    <td>${users.password}
                    <td>${users.created_at}
                </tr>`
            )
        })

    });

    $('#create_users').click(function(e){

        $('#create_users_popup').show()

    })

    $('#create_users_popup_close').click(function(e){

        $('#create_users_popup').hide()

    })

    $('#cancel_create_users').click(function(e){

        $('#create_users_popup').hide()

    })

    $('#submit_create_users').click(function(e){

        e.preventDefault()
        let data = {
            username: $('#inpUsername').val(),
            login: $('#inpLogin').val(),
            id_role: $('#inpRoles').val(),
            email: $('#inpEmail').val(),
            password: $('#inpPassword').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/users/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Пользователь добавлен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })


    $('#update_users').click(function(e){

        $('#update_users_popup').show()

    })

    $('#update_users_popup_close').click(function(e){

        $('#update_users_popup').hide()

    })

    $('#cancel_update_users').click(function(e){

        $('#update_users_popup').hide()

    })

    $('#submit_update_users').click(function(e){

        e.preventDefault()
        let data = {
            login: $('#UpLogin').val(),
            email: $('#UpEmail').val(),
            password: $('#UpPassword').val(),
            id: $('#UpId').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/users/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Пользователь изменен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })
});

