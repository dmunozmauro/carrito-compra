import { sequel } from ".."
import { QueryTypes } from 'sequelize'

export const getAllProductosDao = async () => {
    let query = `select * from productos`;

    return await sequel.query(query, {
        type: QueryTypes.SELECT
    });
}