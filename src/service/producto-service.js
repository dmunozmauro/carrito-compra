import { ProductoDao } from '../database/dao'
import { sequel } from '../database'

export const getAllProductosService = async (req, res) => {
    try {

        const data = await ProductoDao.getAllProductosDao();

        if (!data.length) {
            res.status(200).send({ message: 'La operación no produjo resultados' });
        }

        res.status(200).send({ message: 'OK', data });

    } catch (e) {
        console.log(e);
        res.status(500).send({ message: 'La operación no se pudo concretar, favor intente más tarde.' });
    }
}