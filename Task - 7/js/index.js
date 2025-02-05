let flashGb = prompt("Введите объём флешки:");
let fileSizeMb = 820;
let flashSizeMb = flashGb * 1024;
let file = Math.floor(flashSizeMb / fileSizeMb);
alert(
  `На флешку объёмом ${flashGb} Гб может поместиться ${file} файлов размером 820 Мб.`
);
