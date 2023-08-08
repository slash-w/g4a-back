import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js'; // Importar la aplicación Express
import mercadopago from 'mercadopago';

describe('payment Controller', () => {
  // Configura MercadoPago 
  before(() => {
    mercadopago.configure({
      access_token: process.env.MP_TOKEN,
    });
  });

  // Definir un requerimiento o conjunto de pruebas para crear una nueva donación
  describe('Crear donacion POST /api/payment/create-order', () => {
    it('should create a new donation successfully', async () => {
      const donationData = {
        unit_price: 1000,
      };

      // Simulamos una respuesta exitosa de MercadoPago
      mercadopago.preferences.create = (preference) => {
        expect(preference).to.deep.equal({
          items: [
            {
              unit_price: 1000,
            },
          ],
          back_urls: {
            success: "http://localhost:5173/",
            failure: "http://localhost:5173/",
            pending: ""
          },
          auto_return: 'approved',
        });
      
        return Promise.resolve({
          body: {
            init_point: 'https://www.ejemplo.com/payment', 
          },
        });
      };

      const response = await request(app)
        .post('/api/payment/create-order')
        .send(donationData);

      expect(response.body).to.have.property('mp_url', 'https://www.ejemplo.com/payment');
    });

    it("should return 'failed'", async () => {
      mercadopago.preferences.create = () => Promise.reject(new Error('Error creating donation'));

      const donationData = {
        unit_price: 1000,
      };

      const response = await request(app)
        .post('/api/payment/create-order')
        .send(donationData);

      expect(response.body).to.have.property('message', 'failed');
    });
  });
});