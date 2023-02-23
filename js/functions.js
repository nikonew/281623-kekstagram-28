// функция проверки строки

function checkLengthString (myString,maxLength) {
  return myString.length <= maxLength;
}
checkLengthString ('проверяемая строка', 20);
checkLengthString ('проверяемая строка', 18);
checkLengthString ('проверяемая строка',10);

// функция палидром это или нет

function isPalidrom (str) {
  str = str.toLowerCase().replace(/ /g,'');
  return str === str.split('').reverse().join('');
}
isPalidrom('Лёша на полке клопа нашёл ');
isPalidrom('топот');
isPalidrom('ДовОд');
isPalidrom('Кекс');


// функция извлекает числа

function justNumber (str) {
  if (str !== isNaN) {
    str = str.toString();
  }
  const numsInStr = str.replace(/[^0-9]/g,'');
  return parseInt(numsInStr, 10);
}
justNumber(2023);
justNumber(-1);
justNumber(1.5);
justNumber('2023 год');
justNumber('ECMAScript 2022');
justNumber('1 кефир, 0.5 батона');
justNumber('агент 007');
justNumber('а я томат');


// Функция, которая принимает три параметра

function getString (string, minLength, addCharacter) {
  return string.padStart(minLength, addCharacter);
}
getString('1', 2, '0');
getString('1', 4, '0');
getString('q', 4, 'werty');
getString('q', 4, 'we');
getString('qwerty', 4, '0');
