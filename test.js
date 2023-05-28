const server = require('./app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Konstovar Endpoints', () => {

  test('GET /users should show all users', async () => {
    const res = await requestWithSupertest.get('/api/users');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('users')
      expect(res.body.users.length > 0)
      expect(res.body.users[0]).toHaveProperty('user_id')
      expect(res.body.users[0]).toHaveProperty('login')
      expect(res.body.users[0]).toHaveProperty('username')
      expect(res.body.users[0]).toHaveProperty('role_label')
      expect(res.body.users[0]).toHaveProperty('email')
      expect(res.body.users[0]).toHaveProperty('password')
      expect(res.body.users[0]).toHaveProperty('created_at')
  });

  test('GET /cart_item should show all cart_item', async () => {
    const res = await requestWithSupertest.get('/api/cart_item');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('cart_item')
      expect(res.body.cart_item.length > 0)
      expect(res.body.cart_item[0]).toHaveProperty('id')
      expect(res.body.cart_item[0]).toHaveProperty('cart_id')
      expect(res.body.cart_item[0]).toHaveProperty('product')
      expect(res.body.cart_item[0]).toHaveProperty('quantity')
      expect(res.body.cart_item[0]).toHaveProperty('created_at')
  });

  test('GET /cart should show all cart', async () => {
    const res = await requestWithSupertest.get('/api/cart');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('cart')
      expect(res.body.cart.length > 0)
      expect(res.body.cart[0]).toHaveProperty('cart_id')
      expect(res.body.cart[0]).toHaveProperty('name')
      expect(res.body.cart[0]).toHaveProperty('created_at')
  });

  test('GET /orders_item should show all orders_item', async () => {
    const res = await requestWithSupertest.get('/api/orders_item');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('orders_item')
      expect(res.body.orders_item.length > 0)
      expect(res.body.orders_item[0]).toHaveProperty('id')
      expect(res.body.orders_item[0]).toHaveProperty('orders_id')
      expect(res.body.orders_item[0]).toHaveProperty('product')
      expect(res.body.orders_item[0]).toHaveProperty('quantity')
  });

  test('GET /orders should show all orders', async () => {
    const res = await requestWithSupertest.get('/api/orders');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('orders')
      expect(res.body.orders.length > 0)
      expect(res.body.orders[0]).toHaveProperty('id')
      expect(res.body.orders[0]).toHaveProperty('name')
      expect(res.body.orders[0]).toHaveProperty('amount')
      expect(res.body.orders[0]).toHaveProperty('created_at')
  });

  test('GET /product should show all product', async () => {
    const res = await requestWithSupertest.get('/api/product');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('product')
      expect(res.body.product.length > 0)
      expect(res.body.product[0]).toHaveProperty('id')
      expect(res.body.product[0]).toHaveProperty('name')
      expect(res.body.product[0]).toHaveProperty('provider')
      expect(res.body.product[0]).toHaveProperty('description')
      expect(res.body.product[0]).toHaveProperty('price')
      expect(res.body.product[0]).toHaveProperty('stock')
  });

  test('GET /provider should show all provider', async () => {
    const res = await requestWithSupertest.get('/api/provider');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('provider')
      expect(res.body.provider.length > 0)
      expect(res.body.provider[0]).toHaveProperty('provider_id')
      expect(res.body.provider[0]).toHaveProperty('prov_name')
      expect(res.body.provider[0]).toHaveProperty('addres')
  });

  test('GET /roles should show all roles', async () => {
    const res = await requestWithSupertest.get('/api/roles');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('roles')
      expect(res.body.roles.length > 0)
      expect(res.body.roles[0]).toHaveProperty('id')
      expect(res.body.roles[0]).toHaveProperty('code')
      expect(res.body.roles[0]).toHaveProperty('label')
  });

  test('GET /cart_item quantity > 0', async () => {
    const res = await requestWithSupertest.get('/api/cart_item');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body.cart_item.forEach(item =>{
        expect(item.quantity).toBeGreaterThan(0)
      })
      )
  });
});
