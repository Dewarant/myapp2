$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/cart_item',
        dataType: 'JSON'
    }).done(function( response ) {

        response.cart_item.forEach(cart_item => {
            $('#tbl_cart_item').append(
                `<tr>
                    <td>${cart_item.id}</td>
                    <td>${cart_item.cart_id}</td>
                    <td>${cart_item.product}</td>
                    <td>${cart_item.quantity}</td>
                    <td>${cart_item.created_at}</td>
                </tr>`
            )
        })

    });

    $('#create_cart_item').click(function(e){

        $('#create_cart_item_popup').show()

    })

    $('#create_cart_item_popup_close').click(function(e){

        $('#create_cart_item_popup').hide()

    })

    $('#cancel_create_cart_item').click(function(e){

        $('#create_cart_item_popup').hide()

    })

    $('#submit_create_cart_item').click(function(e){

        e.preventDefault()
        let data = {
            cart_id: $('#inpCart').val(),
            product_id: $('#inpProduct').val(),
            quantity: $('#inpQuantity').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/cart_item/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Вещь добавлена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })


    $('#delete_cart_item').click(function(e){

        $('#delete_cart_item_popup').show()

    })

    $('#delete_cart_item_popup_close').click(function(e){

        $('#delete_cart_item_popup').hide()

    })

    $('#cancel_delete_cart_item').click(function(e){

        $('#delete_cart_item_popup').hide()

    })

    $('#submit_delete_cart_item').click(function(e){

        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/cart_item/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Вещь удалена из карзины')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })
});

