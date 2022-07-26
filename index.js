let total = 0;

function elegirProducto(total) {
  let producto = parseInt(
    prompt(`Cual de nuestros productos desea:
          1.Proucto1 $250 2.Prodcuto2 $500 3.Producto3 $180 4.Prodcuto4 $375`),
  );

  switch (producto) {
    case 1:
      total += 250;
      break;
    case 2:
      total += 500;
      break;
    case 3:
      total += 180;
      break;
    case 4:
      total += 375;
      break;
    default:
      console.log('El Producto ingresado no existe');
      break;
  }
  let respuesta = prompt(`Desea agregar algun producto mas? [Y/N]`);
  if (respuesta.toLocaleLowerCase() === 'y') {
    console.log('asdsad', total);
    elegirProducto(total);
  } else {
    console.log(`El total a pagar es: ${total}`);
  }
}
function carrito() {
  elegirProducto(total);
  let respuesta = prompt(`Desea agregar algun producto mas? [Y/N]`);
  if (respuesta.toLocaleLowerCase() === 'y') {
    carrito();
  } else {
    console.log(`El total a pagar es: ${total}`);
  }
}

carrito();