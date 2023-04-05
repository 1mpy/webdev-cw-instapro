# Предыстория

В нашу студию пришел заказчик, он хочет реализовать аналог популярной соц. сети для обмена фотографий, и выйти с ним на рынок РФ, в связи с тем, что в РФ популярная соц. сеть доступна только из под VPN.

У заказчика уже есть готовое API для реализации MVP приложения:
https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/v1/%5Bkey%5D/instapro/README.md

Заказчик уже пытался реализовать веб приложение с другим подрядчиком, но они не смогли договориться с предыдущим подрячиком о цене.
Мы пообещали что сделаем дешевле и лучше, чем предыдущие разработчики.
Чтобы показать, что мы действительно что-то умеем, мы договорились, что для начала сделаем то же самое что уже сделала предыдущая команда.

Прототип веб версии от прошлой команды заказчика: https://glebkaf.github.io/webdev-cw-instapro/ .
Доступа к исходникам у нас нет, но мы можем ориентроваться на прототип и сделать как минимум не хуже.

Над нашей версией приложения работала Алёна Юдина, но она нашла другую работу и не успела его закончить. В этом репозитории лежат ее наработки.

Давайте вместе посмотрим что у нее получилось

<iframe width="640" height="360" src="https://www.loom.com/embed/71ab70b2c9464b74857164ebc7dd9e3d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Задача

Заказчик ожидает, что наше приложение будет работать так же, как версия от наших конкурентов. Но, с его слов: "будет здорово если вы добавите каких нибудь интерфейсных плюшек".

Что успела сделать Алена:

- Скелет приложения: переключение между страницами, базовое разделение на модули и компоненты
- Полностью реализован сценарий авторизации и регистрации
- Переиспользуемый компонент для загрузки фотографий в наше облако
- Переиспользуемый компонент для шапки сайта
- Сверстала список постов, но не интегрировала его с API

Что осталось доделать, чтобы повторить конкурентов:

- Интегрировать верстку списка постов с API
- Реализовать страницу добавления поста
- Реализовать страницу с постами конкретного юзера
- Реализовать функционал лайков

## Тестирование

Наш отдел QA проанализировал приложение конкурентов, и составил тест план, как мы будем тестировать нашу версию приложения.

1. TBD
