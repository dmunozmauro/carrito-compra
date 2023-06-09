import express from 'express'
import healthRoute from './health-route'
import carritoRoute from './carrito-route'
import productoRoute from './producto-route'

const app = express()

app.use(
    healthRoute,
    carritoRoute,
    productoRoute
)

export default app