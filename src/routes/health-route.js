import express from 'express'

const app = express()

app.get('/health', (req, res) => {
    res.json({health: 'Sistema carrito de compra conectado'})
})

export default app