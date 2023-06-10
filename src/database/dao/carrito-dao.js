import { sequel } from ".."
import { QueryTypes } from 'sequelize'

export const getAllCarritoDao = async () => {
    let query = `select * from carrito`;

    return await sequel.query(query, {
        type: QueryTypes.SELECT
    });
}

export const addProductoCarritoDao = async (id_producto, t) => {
    let query = `insert into carrito(id_producto, cantidad_agregada, vendido) values($1, 1, false)`;

    return await sequel.query(query, {
        type: QueryTypes.INSERT,
        transaction: t,
        bind: [id_producto]
    });
}

export const updCantidadProductosDao = async (id_producto, t) => {
    let query = `update productos set cantidad = cantidad - 1 where id = $1 `;

    return await sequel.query(query, {
        type: QueryTypes.UPDATE,
        transaction: t,
        bind: [id_producto]
    });
}

export const updProductoCarritoDao = async (id_producto, nueva_cantidad, t) => {
    let query = `update carrito set cantidad_agregada = cantidad_agregada + $2 where id_producto = $1 `;

    return await sequel.query(query, {
        type: QueryTypes.UPDATE,
        transaction: t,
        bind: [id_producto, nueva_cantidad]
    });
}
