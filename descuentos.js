const precioOriginal = 100;
const descuento = 10;
const coupons = [
  {
    id: 12345,
    name: "Jorge Palacios",
    discount: 10,
  },
  {
    id: "abcd123",
    name: "Maria Tejada",
    discount: 15,
  },
  {
    id: 2022,
    name: "Pedro Ramirez",
    discount: 12,
  },
];

function calcularPecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPecioConDescuento(
    priceValue,
    discountValue
  );

  const resultP = document.getElementById("Result");
  resultP.innerText = "El precio con descuento es de: Q." + precioConDescuento;
}

function existeCupon(coupons, cuponIn) {
  var existe = coupons.some(function (cupon) {
    return cupon.id == cuponIn;
  });
  return existe;
}

function onClickButtonCouponDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;
  const resultPC = document.getElementById("Result");

  let existe = existeCupon(coupons, couponValue);
  if (existe) {
    const userCoupon = coupons.find(function (coupon) {
      return coupon.id == couponValue;
    });
    const name = userCoupon.name;
    const discount = userCoupon.discount;
    const priceFinal = calcularPecioConDescuento(priceValue, discount);

    resultPC.innerText =
      name +
      ", tienes un descuento de: " +
      discount +
      "%" +
      " el precio del producto con descuento es de: Q" +
      priceFinal;
  } else {
    resultPC.innerText = "Cupón invalido";
  }
}
