$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/cart',
        dataType: 'JSON'
    }).done(function( response ) {

        response.cart.forEach(cart => {
            $('#tbl_cart').append(
                `<tr>
                    <td>${cart.id}
                    <td>${cart.uid}
                    <td>${cart.created_at}
                </tr>`
            )
        })

    });

    $('#create_cart').click(function(e){

        $('#create_cart_popup').show()

    })

    $('#create_cart_popup_close').click(function(e){

        $('#create_cart_popup').hide()

    })

    $('#cancel_create_cart').click(function(e){

        $('#create_cart_popup').hide()

    })

    $('#submit_create_cart').click(function(e){

        e.preventDefault()
        let data = {
            uid: $('#inpUserid').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/cart/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Корзина добавлена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })


    $('#update_cart').click(function(e){

        $('#update_cart_popup').show()

    })

    $('#update_cart_popup_close').click(function(e){

        $('#update_cart_popup').hide()

    })

    $('#cancel_update_cart').click(function(e){

        $('#update_cart_popup').hide()

    })

    $('#submit_update_cart').click(function(e){

        e.preventDefault()
        let data = {
            id: $('#inpIdup').val(),
            uid: $('#inpUidup').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/cart/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Пользователь корзины изменен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

    $('#delete_cart').click(function(e){

        $('#delete_cart_popup').show()

    })

    $('#delete_cart_popup_close').click(function(e){

        $('#delete_cart_popup').hide()

    })

    $('#cancel_delete_cart').click(function(e){

        $('#delete_cart_popup').hide()

    })

    $('#submit_delete_cart').click(function(e){

        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/cart/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Корзина удалена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

})
