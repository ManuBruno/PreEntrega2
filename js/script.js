alert("Bienvenidos a tienda virtual Los Materiales");
let carrito = [];

const termos = [
  {
    nombre: "Stanley 1.2L",
    precio: 59990,
  },
  {
    nombre: "Termo media manija 1LT uruguayo",
    precio: 14990,
  },
  {
    nombre: "Termo 1/2L",
    precio: 6990,
  },
  {
    nombre: "Termo clásico Perzonalizado",
    precio: 17990,
  },
];

const mates = [
  {
    nombre: "Mate Camionero uruguayo premium Perzonalizado",
    precio: 19990,
  },
  {
    nombre: "Mate camionero uruguayo liso",
    precio: 16990,
  },
  {
    nombre: "Mate Imperial Liso",
    precio: 29990,
  },
  {
    nombre: "Mate Imperial Personalizado",
    precio: 32990,
  },
  {
    nombre: "Mate torpedo virola en acero cincelada",
    precio: 18990,
  },
];

const materas = [
  {
    nombre: "Matera canasto cuero premium",
    precio: 19990,
  },
  {
    nombre: "Bolso matero cuero premium",
    precio: 49990,
  },
  {
    nombre: "Mochila cuero premium",
    precio: 49990,
  },
];

const bombillas = [
  {
    nombre: "Bombilla pico de loro acero con filtro",
    precio: 4990,
  },
  {
    nombre: "Bombilla pico de loro acero con dije",
    precio: 3490,
  },
  {
    nombre: "Bombillon pico de rey alpaca",
    precio: 19990,
  },
  {
    nombre: "Bombillon pico de loro Alpaca",
    precio: 19990,
  },
];

const yerbas = [
  {
    nombre: "Yerba Rei Verde 500g",
    precio: 1389,
  },
  {
    nombre: "Yerba Canarias 500g",
    precio: 1275,
  },
  {
    nombre: "Yerba Playadito 500g",
    precio: 566,
  },
  {
    nombre: "Yerba Playadito sin palo 500g",
    precio: 766,
  },
  {
    nombre: "Yerba Organica Legado Suave 500g",
    precio: 1500,
  },
];

while (true) {
  const categoriaSeleccionada = prompt(
    `Seleccione una categoría:
  1- Termos
  2- Mates
  3- Materas
  4- Bombillas
  5- Yerbas`
  );

  if (categoriaSeleccionada === null) {
    break;
  }

  let categoria;
  switch (categoriaSeleccionada) {
    case "1":
      categoria = termos;
      break;
    case "2":
      categoria = mates;
      break;
    case "3":
      categoria = materas;
      break;
    case "4":
      categoria = bombillas;
      break;
    case "5":
      categoria = yerbas;
      break;
    default:
      alert("Categoría no válida.");
      continue;
  }

  let productosDisponibles = `Productos disponibles en la categoría ${categoriaSeleccionada}:\n`;
  categoria.forEach((producto, index) => {
    productosDisponibles += `${index + 1}. ${producto.nombre} - $${
      producto.precio
    }\n`;
  });
  alert(productosDisponibles);

  const precioMinimo = parseInt(prompt("Ingrese el precio mínimo:"));
  const precioMaximo = parseInt(prompt("Ingrese el precio máximo:"));

  if (!isNaN(precioMinimo) && !isNaN(precioMaximo)) {
    const productosFiltrados = categoria.filter(
      (producto) =>
        producto.precio >= precioMinimo && producto.precio <= precioMaximo
    );

    let productosFiltradosTexto = "Productos filtrados:\n";
    productosFiltrados.forEach((producto) => {
      productosFiltradosTexto += `${producto.nombre} - $${producto.precio}\n`;
    });
    alert(productosFiltradosTexto);
  } else {
    alert("Precios inválidos.");
  }

  const productoSeleccionado =
    parseInt(prompt("Seleccione un producto por su número:")) - 1;

  if (productoSeleccionado >= 0 && productoSeleccionado < categoria.length) {
    agregarAlCarrito(productoSeleccionado, categoria);
  } else {
    alert("Selección no válida.");
  }

  const continuar = prompt("¿Desea seguir comprando? Escriba si o no.");
  if (continuar.toLowerCase() !== "si") {
    break;
  }
}

while (true) {
  const edadUsuario = parseInt(prompt("Por favor, ingrese su edad:"));
  if (isNaN(edadUsuario) || edadUsuario < 0) {
    alert("Edad no válida. Por favor, ingrese una edad válida.");
    continue;
  }

  if (edadUsuario >= 18) {
    const confirmacionPago = prompt(
      "¿Desea proceder con el pago? Conteste por Si o No"
    );
    if (confirmacionPago.toLowerCase() === "si") {
      const metodoPago = prompt(
        "Seleccione un método de pago: Efectivo, Débito, Crédito, Mercado Pago"
      );
      switch (metodoPago.toLowerCase()) {
        case "efectivo":
          alert(
            "¡Pago exitoso! Se le realizara un descuento del 10% por pagar en efectivo. Gracias por su compra!"
          );
          pagoEfectivo();
          break;
        case "debito":
        case "credito":
        case "mercado pago":
          const confirmacionMetodo = prompt(
            `Confirmar pago con ${metodoPago}. Escriba si o no.`
          );
          if (confirmacionMetodo.toLowerCase() === "si") {
            alert(
              `¡Pago exitoso con ${metodoPago}! Su compra ha sido completada.`
            );
            mostrarCarrito();
          } else {
            alert("Pago cancelado.");
          }
          break;
        default:
          alert("Método de pago no válido.");
      }
    }
  } else {
    alert("Lo siento, debes tener al menos 18 años para realizar el pago.");
  }

  const continuarComprando = prompt(
    "¿Desea seguir comprando? Conteste por Si o No"
  );
  if (continuarComprando.toLowerCase() !== "si") {
    break;
  }
}

mostrarCarrito();

// Funciones
function agregarAlCarrito(productoIndex, categoria) {
  const producto = categoria[productoIndex];
  carrito.push(producto);
  alert(`Producto "${producto.nombre}" agregado al carrito.`);
}

function mostrarCarrito() {
  let mensaje = "Contenido del carrito:\n";
  let total = 0;
  carrito.forEach((producto, index) => {
    mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    total += producto.precio;
  });
  mensaje += `Total: $${total}`;
  alert(mensaje);
}

function pagoEfectivo() {
  let mensaje = "Contenido del carrito:\n";
  let total = 0;
  carrito.forEach((producto, index) => {
    mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    total += producto.precio;
  });
  mensaje += `Total: $${total - total * 0.1}`;
  alert(mensaje);
}
