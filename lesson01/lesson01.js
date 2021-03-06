// Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.
// Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.

var celsTemp = parseInt(prompt('Введите температуру по Цельсию'));
var farTemp = (9 / 5) * celsTemp + 32;
alert('Температура в фаренгейтах: ' + farTemp);

// Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin.
// Вывести admin (должно вывестись «Василий»).

var admin;
var name;
name = 'Василий';
admin = name;
document.write(admin);

// Чему будет равно JS-выражение 1000 + "108"?

/*
Думаю, что 1000108.
Оператор сложения "+" имеет приоритет конкатенации
Проверим
 */

console.log(1000+'108');

// Самостоятельно разобраться с атрибутами тега script (async и defer).

/*
async - по загрузке скриптов
defer - по порядку в документе
Применимо, когда страница большая, и есть вероятность долго ожидать ее загрузки; когда скриптов несколько.
Без того и другого загрузка будет происходить по порядку, сверху вниз, с ожиданием загрузки каждого документа.
 */