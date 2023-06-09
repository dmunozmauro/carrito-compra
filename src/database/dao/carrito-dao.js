import { sequel } from ".."
import { QueryTypes } from 'sequelize'

export const addProductoCarritoDao = async (id_producto, cantidad_agregada, vendido, t) => {
    let query = `insert into carrito(id_producto, cantidad_agregada, vendido) values($1, $2, $3)`;

    return await sequel.query(query, {
        type: QueryTypes.INSERT,
        transaction: t,
        bind: [id_producto, cantidad_agregada, vendido]
    });
}

export const updCantidadProductosDao = async (id_producto, cantidad_agregada, t) => {
    let query = `update productos set cantidad = cantidad - $2 where id = $1 `;

    return await sequel.query(query, {
        type: QueryTypes.UPDATE,
        transaction: t,
        bind: [id_producto, cantidad_agregada]
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
