import express from 'express'
import {ProductoService} from '../service'

const app = express()
const router = express.Router()
app.use('/productos', router)

// Obtiene todos los productos del inventario
router.get('/obtener-productos', ProductoService.getAllProductosService)


export default app