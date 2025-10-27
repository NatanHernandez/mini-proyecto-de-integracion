const request = require('supertest');
const app = require('../app'); // importa tu aplicación Express

describe('Pruebas del endpoint de productos', () => {
  it('Debe responder con código 200 en /api/productos', async () => {
    const res = await request(app)
      .get('/api/productos')
      .auth('natan', '1202'); // 👈 credenciales correctas para pasar la autenticación

    expect(res.statusCode).toBe(200);
  });
});