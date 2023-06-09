import { CarritoDao } from '../database/dao'
import { sequel } from '../database'


export const addProductoCarritoService = async (req, res) => {
    const transaction = await sequel.transaction()

    const { id_producto, cantidad_agregada, vendido } = req.body;

    try {

        await CarritoDao.addProductoCarritoDao(id_producto, cantidad_agregada, vendido, transaction);
        await CarritoDao.updCantidadProductosDao(id_producto, cantidad_agregada, transaction);
        await transaction.commit();

        res.status(200).send({ message: 'Producto agregado al carrito' });

    } catch (e) {
        await transaction.rollback();
        console.log(e.message);
        res.status(500).send({ message: 'La operación no se pudo concretar, favor intente más tarde.' });
    }
}

export const updProductoCarritoService = async (req, res) => {
    const transaction = await sequel.transaction()
    const { id_producto, nueva_cantidad } = req.body;

    try {

        await CarritoDao.updProductoCarritoDao(id_producto, nueva_cantidad, transaction);
        await CarritoDao.updCantidadProductosDao(id_producto, nueva_cantidad, transaction);
        await transaction.commit();

        res.status(200).send({ message: 'Carrito actualizado' });

    } catch (e) {
        await transaction.rollback();
        console.log(e.message);
        res.status(500).send({ message: 'La operación no se pudo concretar, favor intente más tarde.' });
    }
}
