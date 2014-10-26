## Комментарии при выполнении

### Задание №1

1. Последняя таблица - можно было бы убрать внутренний .b-column-content при этом добавив в .b-row.-table .b-column недостающий padding в 10px. Просто не захотелось портить особо похожую структуру.

----

### Задание №2

1. Насчет высоты слегка недопонял. Сделал на всякий случай каждый блок + 20px по высоте (из-за паддингов вверху и внизу). Т.е. блок высотой в 100px у меня в 120px, т.к. 100px - посчитал, что это для контента (паддинги и бордеры в изменении размеров не участвуют из-за box-sizing: border-box).

----

### Задание №3

1. Решение не самое лучшее, но это первое, что пришло в голову.

----

### Задание №4

1. Так и не понял, какие цвета при наведении должны быть и что смениться, поэтому добавил транзишен на box-shadow.

----

### Задание №5

1. Пришлось вынести svg blur фильтер для некоторых версий FF.

----

### Задание №6

1. Пока ничего умнее не придумал.

----

### Задание №7

1. Ограничил блок b-task-result по ширине - 40% классом -percent для лучшей демонстрации. Играясь этим классом, достигаем масштабирования самого квадратного блока.

----

### Задание №8

1. Если честно - было лень делать устойчивость пароля и подобные штуки. Но они достаточно легко могут добавляться через SimpleValidator.
2. По идее, можно было бы еще отделить один слой, который инкапсулировал бы FormValidator и адаптеры для выборки элементов (тогда бы смогли легко поменять jQuery на что-нибудь другое), но подумал, что тут это не особо нужно.
3. Также не поставил чистку формы по успешному "сабмиту", т.к. не особо понял, что потом должно произойти после отправки. Оставил как есть.

----

### Задание №9

1. По onSelect отработал условие того, куда именно ткнули. Соответственно, если в linkClass = '.b-info', то показываем alert, иначе, выполняем оригинальный функционал либы.

----

### Задание №10

1. Его описания не было в репозитории с заданием :)

----

### Задание №11

1. Разнес на логику маятника - Pendulum и отрисовщика маятника - PendulumDrawer. Существует 2 кастомных события - по запуску отрисовки и по ее прекращению (drawer-ended и drawer-started соответственно).

## TODO

1. ~~В 3-ем задании поправить на ul.~~
2. В 8ом задании сделать модель (???), validationRules (???).
3. В 6ом задании попробовать что-нибудь поумнее.
4. ~~В 11ом задании хоть чуток отрефакторить main.js.~~