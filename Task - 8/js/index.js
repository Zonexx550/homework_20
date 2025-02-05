let wallet = prompt("Введите вашу сумму денег:");
let chocoPrice = prompt("Цена одной шоколадки:");
let chocoCount = Math.floor(wallet / chocoPrice);
let count = wallet % chocoCount;
alert(
  `Вы можете купить ${chocoCount} шоколадок. Сдача, которая останется после покупки: ${count}`
);
