let tiendas = [{
        _id: 1,
        nombre: "Minisúper",
        domicilio: "Av. La Cantera, #123",
        telefono: "499923423",
        dueño: "Abraham Carranza Macías"
    },
    {
        _id: 2,
        nombre: "Mi Ranchito",
        domicilio: "Av. La Cantera, #123",
        telefono: "499923423",
        dueño: "Cecilia Mata Muñoz"
    },
    {
        _id: 3,
        nombre: "Botanas",
        domicilio: "Av. La Cantera, #123",
        telefono: "499923423",
        dueño: "María Isabel Hérnandez Vite"
    }
];

let proveedores = [{
        _id: 1,
        nombre: "Francisco Tapia",
        empresa: "Bimbo",
        telefono: "44932423423",
        idTienda: 3
    },
    {
        _id: 2,
        nombre: "Pedro de la Cruz",
        empresa: "Santorini",
        telefono: "49234234324",
        idTienda: 2
    }, {
        _id: 3,
        nombre: "Joel",
        empresa: "Coca Cola",
        telefono: "449123123123",
        idTienda: 1
    }
];

// Mi nombre es ${nombre}, soy dueño de la tienda ${nombreTienda} con domicilio ${domicilio} 
// y mi proveedor de la empresa ${empresa} es ${nombreProveedor}


let getTiendaById = (id, callback) => {

    let tienda = tiendas.find((tienda) => {
        return tienda._id == id;
    });

    if (!tienda) {
        // SÍ HAY ERROR
        callback('No existe la tienda en la BD', null);
    } else {
        // NO HAY ERROR
        callback(null, tienda);
    }
};

let getProveedor = (id, callback) => {

    let proveedor = proveedores.find((proveedor) => {
        return proveedor.idTienda == id;
    });

    if (!proveedor) {
        callback('No existe el proveedor en la BD', null);
    } else {
        callback(null, proveedor);
    }

}

getTiendaById(3, (err, tienda) => {

    if (err) {
        return console.log(err);
    }

    getProveedor(tienda._id, (err, proveedor) => {

        if (err) {
            return console.log(err);
        }
        console.log(`Mi nombre es ${tienda.dueño}, soy dueño de la tienda ${tienda.nombre} con domicilio ${tienda.domicilio}
            y mi proveedor de la empresa ${proveedor.empresa} es ${proveedor.nombre}`);
    });

});