import { CarritoDao } from '../database/dao'
import { sequel } from '../database'

export const getProductoCarritoService = async (req, res) => {
    try {

        const data = await CarritoDao.getAllCarritoDao();

        if (!data.length) {
            return res.status(200).send({ message: 'La operación no produjo resultados' });
        }

        res.status(200).send({ message: 'OK', data });

    } catch (e) {
        console.log(e);
        res.status(500).send({ message: 'La operación no se pudo concretar, favor intente más tarde.' });
    }
}

export const addProductoCarritoService = async (req, res) => {
    const transaction = await sequel.transaction()

    const { id_producto } = req.body;

    try {

        await CarritoDao.addProductoCarritoDao(id_producto, transaction);
        await CarritoDao.updCantidadProductosDao(id_producto, transaction);
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
