import React from "react";
import { useEffect, useState } from 'react';

export const HomeComponent = () => {

    const [dataInventario, setDataInventario] = useState([])

    useEffect(() => {
        getProductos();
        seeCarrito();
    }, []);
    

    const seeCarrito = async () => {
        try {

            const url = `http://localhost:5000/carrito/ver-productos-carrito`;
            const opcionesRequest = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            };
            const responseFetch = await fetch(url, opcionesRequest);
            const responseJson = await responseFetch.json();

        } catch (err) {
            console.log("err: ", err);
        }
    }

    const getProductos = async () => {
        try {

            const url = `http://localhost:5000/productos/obtener-productos`;
            const opcionesRequest = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            };
            const responseFetch = await fetch(url, opcionesRequest);
            const responseJson = await responseFetch.json();
            setDataInventario(responseJson.data);

        } catch (err) {
            console.log("err: ", err);
        }
    }

    const addCarrito = async (id) => {
        try {
            const url = `http://localhost:5000/carrito/agregar-producto-carrito`;
            const body = { id_producto: id };

            const opcionesPeticion = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            };

            const responseFetch = await fetch(url, opcionesPeticion);
            const responseJson = await responseFetch.json();
            console.log('responseJson', responseJson);

        } catch (err) {
            console.log("err: ", err);
        }


    }

    return (
        <div className="row">
            {dataInventario.map((d, i) => {
                return (
                    <div key={i} className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{d.nombre}</h5>
                                <p>{d.valor}</p>
                                <button type="button" onClick={() => addCarrito(d.id)} className="btn btn-primary">Agregar</button>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

