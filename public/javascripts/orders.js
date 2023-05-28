$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/orders',
        dataType: 'JSON'
    }).done(function( response ) {

        response.orders.forEach(orders => {
            $('#tbl_orders').append(
                `<tr>
                    <td>${orders.id}
                    <td>${orders.name}
                    <td>${orders.amount}
                    <td>${orders.created_at}
                </tr>`
            )
        })

    });

    $('#create_orders').click(function(e){

        $('#create_orders_popup').show()

    })

    $('#create_orders_popup_close').click(function(e){

        $('#create_orders_popup').hide()

    })

    $('#cancel_create_orders').click(function(e){

        $('#create_orders_popup').hide()

    })

    $('#submit_create_orders').click(function(e){

        e.preventDefault()
        let data = {
            amount: $('#inpAmount').val(),
            user_id: $('#inpUser_id').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/orders/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Заказ создан')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

    $('#delete_orders').click(function(e){

        $('#delete_orders_popup').show()

    })

    $('#delete_orders_popup_close').click(function(e){

        $('#delete_orders_popup').hide()

    })

    $('#cancel_delete_orders').click(function(e){

        $('#delete_orders_popup').hide()

    })

    $('#submit_delete_orders').click(function(e){

        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/orders/delete',
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
