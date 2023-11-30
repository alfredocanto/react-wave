import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../src/App';
import { ClientesLista } from '../src/modules/clientes/ClientesLista';
import { ProductosLista } from '../src/modules/productos/ProductosLista';
import { MetodosLista } from '../src/modules/metodos/MetodosLista';
import { FacturasLista } from '../src/modules/facturas/FacturasLista';
import { ClientesAlta } from '../src/modules/clientes/ClientesAlta';
import {MetodosAlta} from '../src/modules/metodos/MetodosAlta';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/clientes" element={<ClientesLista />} />
                <Route path="/clientes/nuevo" element={<ClientesAlta />} />
                <Route path="/productos" element={<ProductosLista />} />
                <Route path="/metodos" element={<MetodosLista />} />
                <Route path="/metodos/nuevo" element={<MetodosAlta />} />
                <Route path="/facturas" element={<FacturasLista/>}/>
            </Route>
        </Routes>
    );
}
