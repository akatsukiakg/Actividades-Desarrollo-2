const ventas = [

{ id: 1, nroFactura: "0000-00001200", fecha: "2023-01-05", importe: 1200.50, suc: 1 },

{ id: 2, nroFactura: "0000-00001201", fecha: "2023-01-10", importe: 543.20, suc: 2 },

{ id: 3, nroFactura: "0000-00001202", fecha: "2023-02-15", importe: 250.00, suc: 3 },

{ id: 4, nroFactura: "0000-00001203", fecha: "2023-02-20", importe: 870.60, suc: 4 },

{ id: 5, nroFactura: "0000-00001204", fecha: "2023-03-01", importe: 4300.75, suc: 5 },

{ id: 6, nroFactura: "0000-00001205", fecha: "2023-03-05", importe: 632.90, suc: 1 },

{ id: 7, nroFactura: "0000-00001206", fecha: "2023-03-10", importe: 125.50, suc: 2 },

{ id: 8, nroFactura: "0000-00001207", fecha: "2023-04-02", importe: 932.00, suc: 3 },

{ id: 9, nroFactura: "0000-00001208", fecha: "2023-04-05", importe: 756.80, suc: 4 },

{ id: 10, nroFactura: "0000-00001209", fecha: "2023-05-01", importe: 2840.25, suc: 5 },

{ id: 11, nroFactura: "0000-00001210", fecha: "2023-05-05", importe: 920.00, suc: 1 },

{ id: 12, nroFactura: "0000-00001211", fecha: "2023-05-10", importe: 732.50, suc: 2 },

{ id: 13, nroFactura: "0000-00001212", fecha: "2023-06-02", importe: 1110.00, suc: 3 },

{ id: 14, nroFactura: "0000-00001213", fecha: "2023-06-05", importe: 610.30, suc: 4 },

{ id: 15, nroFactura: "0000-00001214", fecha: "2023-07-01", importe: 3700.00, suc: 5 },

{ id: 16, nroFactura: "0000-00001215", fecha: "2023-07-05", importe: 2040.80, suc: 1 },

{ id: 17, nroFactura: "0000-00001216", fecha: "2023-07-10", importe: 450.75, suc: 2 },

{ id: 18, nroFactura: "0000-00001217", fecha: "2023-08-02", importe: 980.00, suc: 3 },

{ id: 19, nroFactura: "0000-00001218", fecha: "2023-08-05", importe: 1675.30, suc: 4 },

{ id: 20, nroFactura: "0000-00001219", fecha: "2023-09-01", importe: 5500.00, suc: 5 }

]

function sucursalQueFacturoMas(ventas) {
  const sucursales = {};
  
  for (const venta of ventas) {
    const sucursal = venta.suc;
    
    if (sucursales.hasOwnProperty(sucursal)) {
      sucursales[sucursal] += venta.importe;
    } else {
      sucursales[sucursal] = venta.importe;
    }
  }
  
  let maxImporte = 0;
  let sucursalMax = null;
  
  for (const sucursal in sucursales) {
    if (sucursales[sucursal] > maxImporte) {
      maxImporte = sucursales[sucursal];
      sucursalMax = sucursal;
    }
  }
  
  return { sucursal: sucursalMax, total: maxImporte };
}

function sucursalQueFacturoMenosEnMayo(ventas) {
  const sucursales = {};
  
  for (const venta of ventas) {
    const fecha = new Date(venta.fecha);
    const mes = fecha.getMonth();
    const year = fecha.getFullYear();
    
    if (mes === 4 && year === 2023) {
      const sucursal = venta.suc;
      
      if (sucursales.hasOwnProperty(sucursal)) {
        sucursales[sucursal] += venta.importe;
      } else {
        sucursales[sucursal] = venta.importe;
      }
    }
  }
  
  let minImporte = Infinity;
  let sucursalMin = null;
  
  for (const sucursal in sucursales) {
    if (sucursales[sucursal] < minImporte) {
      minImporte = sucursales[sucursal];
      sucursalMin = sucursal;
    }
  }
  
  return { sucursal: sucursalMin, total: minImporte };
}
function listarVentasPorSucursal(ventas) {
  const ventasPorSucursal = {};
  
  for (const venta of ventas) {
    const sucursal = venta.suc;
    
    if (ventasPorSucursal.hasOwnProperty(sucursal)) {
      ventasPorSucursal[sucursal].push(venta);
    } else {
      ventasPorSucursal[sucursal] = [venta];
    }
  }
  
  for (const sucursal in ventasPorSucursal) {
    ventasPorSucursal[sucursal].sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return fechaA - fechaB;
    });
  }
  
  return ventasPorSucursal;
}
function importeTotalFacturadoPorAño(ventas, año) {
  let total = 0;
  
  for (const venta of ventas) {
    const fecha = new Date(venta.fecha);
    const year = fecha.getFullYear();
    
    if (year === año) {
      total += venta.importe;
    }
  }
  
  return { año, total };
}


const sucursalMasFacturo = sucursalQueFacturoMas(ventas);
console.log("Sucursal que facturó más en total:", sucursalMasFacturo);

const sucursalMenosFacturoEnMayo = sucursalQueFacturoMenosEnMayo(ventas);
console.log("Sucursal que facturó menos en mayo de 2023:", sucursalMenosFacturoEnMayo);

const ventasPorSucursalOrdenadas = listarVentasPorSucursal(ventas);
console.log("Ventas ordenadas por fechas y agrupadas por sucursal:", ventasPorSucursalOrdenadas);

const importeTotalAño2023 = importeTotalFacturadoPorAño(ventas, 2023);
console.log("Importe total facturado en el año 2023:", importeTotalAño2023);
