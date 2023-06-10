import express from 'express'
import {CarritoService} from '../service'

const app = express()
const router = express.Router()
app.use('/carrito', router)

// Ver productos agregados al carrito
router.get('/ver-productos-carrito', CarritoService.getProductoCarritoService)

// Agrega productos al carrito y actualiza stock de productos
router.post('/agregar-producto-carrito', CarritoService.addProductoCarritoService)

// Actualiza cantidad de productos en carrito y actualiza stock de productos
router.put('/actualizar-producto-carrito', CarritoService.updProductoCarritoService)



export default app