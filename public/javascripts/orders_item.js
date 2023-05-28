$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/orders_item',
        dataType: 'JSON'
    }).done(function( response ) {

        response.orders_item.forEach(orders_item => {
            $('#tbl_orders_item').append(
                `<tr>
                    <td>${orders_item.id}
                    <td>${orders_item.orders_id}
                    <td>${orders_item.product}
                    <td>${orders_item.quantity}
                </tr>`
            )
        })

    }); 

    $('#create_orders_item').click(function(e){

        $('#create_orders_item_popup').show()

    })

    $('#create_orders_item_popup_close').click(function(e){

        $('#create_orders_item_popup').hide()

    })

    $('#cancel_create_orders_item').click(function(e){

        $('#create_orders_item_popup').hide()

    })

    $('#submit_create_orders_item').click(function(e){

        e.preventDefault()
        let data = {
            orders_id: $('#inpOrders_id').val(),
            product_id: $('#inpProduct_id').val(),
            quantity: $('#inpQuantity').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/orders_item/create',
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

    $('#delete_orders_item').click(function(e){

        $('#delete_orders_item_popup').show()

    })

    $('#delete_orders_item_popup_close').click(function(e){

        $('#delete_orders_item_popup').hide()

    })

    $('#cancel_delete_orders_item').click(function(e){

        $('#delete_orders_item_popup').hide()

    })

    $('#submit_delete_orders_item').click(function(e){

        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/orders_item/delete',
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
