import express from 'express'
import entityController from '../controllers/entityController'

const router = express.Router()

// Listar todas las entidades
router.post('/', async (req, res) => {
  try {
    const { startId, endId} = req.body;
    const validParams = (startId === null || endId === null) || (startId > endId) || startId < 0 || endId < 0 || typeof startId == 'string' || typeof endId == "string" || startId > 20 || endId > 20;
    if (validParams) res.status(500).json({
      decription: 'Error en validación datos de entrada, no pueden haber numeros negativos, no puede pasar caracteres ni el id inicial debe ser mayor al id final'
    });
    const entities = await entityController.getEntities(startId, endId);
    if (entities.length === 0) res.status(404).json({
      decription:'Error no se encuentra para rango especificado'});
    res.status(200).json({
      description: 'OK',
      rango: 'de ' + startId + ' a ' + endId,
      data: entities
    })
  } catch (error: any) {
    res.status(400).json({error: error.message})
  }
})

export default router