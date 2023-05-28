$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: '/api/product',
        dataType: 'JSON'
    }).done(function( response ) {

        response.product.forEach(product => {
            $('#tbl_product').append(
                `<tr>
                    <td>${product.id}
                    <td>${product.name}
                    <td>${product.provider}
                    <td>${product.description}
                    <td>${product.price}
                    <td>${product.stock}
                </tr>`
            )
        })

    });

    $('#create_product').click(function(e){

        $('#create_product_popup').show()

    })

    $('#create_product_popup_close').click(function(e){

        $('#create_product_popup').hide()

    })

    $('#cancel_create_product').click(function(e){

        $('#create_product_popup').hide()

    })

    $('#submit_create_product').click(function(e){

        e.preventDefault()
        let data = {
            name: $('#inpName').val(),
            provider_id: $('#inpProvider_id').val(),
            description: $('#inpDescription').val(),
            price: $('#inpPrice').val(),
            stock: $('#inpStock').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/product/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Товар добавлен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })


    $('#update_product').click(function(e){

        $('#update_product_popup').show()

    })

    $('#update_product_popup_close').click(function(e){

        $('#update_product_popup').hide()

    })

    $('#cancel_update_product').click(function(e){

        $('#update_product_popup').hide()

    })

    $('#submit_update_product').click(function(e){

        e.preventDefault()
        let data = {
            id: $('#inpUpid').val(),
            name: $('#inpUpname').val(),
            provider_id: $('#inpUpprovider').val(),
            description: $('#inpUpdescription').val(),
            price: $('#inpUpprice').val(),
            stock: $('#inpUpstock').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/product/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Товар изменен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

    $('#delete_product').click(function(e){

        $('#delete_product_popup').show()

    })

    $('#delete_product_popup_close').click(function(e){

        $('#delete_product_popup').hide()

    })

    $('#cancel_delete_product').click(function(e){

        $('#delete_product_popup').hide()

    })

    $('#submit_delete_product').click(function(e){

        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/product/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Товар удалена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

    $(document).ready(function(){
        $('#search_product').click(function(e){
            e.preventDefault()
            
            var position = $('#searchname').val();

            $.ajax({
                type: 'GET',
                url: '/api/product/search',
                data: {position: position},
                dataType: 'JSON'
            }).done(function( response ) {
                $('#tbl_product').empty();
    
                response.product.forEach(product => {
                    $('#tbl_product').append(
                        `<tr>
                            <td>${product.id}</td>
                            <td>${product.name}</td>
                            <td>${product.provider}</td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                            <td>${product.stock}</td>
                        </tr>`
                    );
                });
            });
    
        });
    });

    $(document).ready(function(){
        $('#order_product').click(function(e){
            e.preventDefault()

            $.ajax({
                type: 'GET',
                url: '/api/product/order',
                dataType: 'JSON'
            }).done(function( response ) {
                $('#tbl_product').empty();
    
                response.product.forEach(product => {
                    $('#tbl_product').append(
                        `<tr>
                            <td>${product.id}</td>
                            <td>${product.name}</td>
                            <td>${product.provider}</td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                            <td>${product.stock}</td>
                        </tr>`
                    );
                });
            });
    
        });
    });

    $(document).ready(function(){
        $('#between_product').click(function(e){
            e.preventDefault()
            let data = {
                inbet: $('#inbetween').val(),
                outbet: $('#outbetween').val()
            }

            $.ajax({
                type: 'GET',
                url: '/api/product/between',
                data: data,
                dataType: 'JSON'
            }).done(function( response ) {
                $('#tbl_product').empty();
    
                response.product.forEach(product => {
                    $('#tbl_product').append(
                        `<tr>
                            <td>${product.id}</td>
                            <td>${product.name}</td>
                            <td>${product.provider}</td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                            <td>${product.stock}</td>
                        </tr>`
                    );
                });
            });
    
        });
    });
});
