let number = prompt("Введите трёхзначное число:");
let numberReverse =
  (number % 10) * 100 +
  (Math.floor(number / 10) % 10) * 10 +
  Math.floor(number / 100);
alert(`Число задом наперед: ${numberReverse}`);
