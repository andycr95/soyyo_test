import entityController from '../controllers/entityController';

//test para metodo obtener entidades
describe('EntityController', () => {
  describe('getEntities', () => {
    it('should return an array of entities', async () => {
      const entities = await entityController.getEntities(1, 2);
      expect(entities).toEqual([
        {
          "entityId": 1,
          "name": "Tuya",
          "identificationNumber": "123456789",
          "attributeValidator": null,
          "expirationDate": "2030-10-27",
          "contactName": "Ana Maria Palacio",
          "contactMail": "APalacioH@tuya.com.co",
          "ipAddress": "",
          "logo": "logo_entidad_tuya.png",
          "domain": null
        },
        {
          "entityId": 2,
          "name": "Bancolombia",
          "identificationNumber": "987654321",
          "attributeValidator": null,
          "expirationDate": "2030-10-27",
          "contactName": "Mauricio Serna Florez",
          "contactMail": "msflore@bancolombia.com.co",
          "ipAddress": "",
          "logo": "logo_entidad_bancolombia.png",
          "domain": null
        }
      ]);
    });
  });
});