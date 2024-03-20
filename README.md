﻿# Описание проектов

## GoLang

В директории GoLang проектов собраны pet-проекты, реализованные за период обучения. Описание главного проекта: VK_app:Верификация, аутентификация и авторизация через JWT-токен и обёртку middleware, токен создаётся при входе в систему через функцию login. Хэширование токена реализовано через алгоритм HMAC-SHA256. Хранилище - БД на PostgreSQL, instance которой происходит согласно паттерну Singleton. Хэширование пароля происходит через библиотеку bcrypt, далее для авторизации сравнивается хэш с возможным ключом хэширования. API защищена авторизацией, запросы поделены по уровню авторизации на пользователя и администратора. Функционал написан в рамках архитектуры REST API. REST API имеет документацию в формате Swagger 2.0 (OPEN API 3.0). Документация инициализируется при запуске контейнера Docker и доступна по запросу http://localhost:8080/swagger/index.html. Для маршрутизатора используется пакет gin, в каждом хэндлере передаётся контекст. Для приложения создан Dockerfile, для БД - db.Dockerfile. Docker-compose файл сделан для сборки БД и приложения. Запуск и завершение приложения происходит через команды, указанные в GitHub

В рамках обучения (на курсе и самостоятельно) я изучил следющие темы:

- Синтаксис GoLang
- HTTP-протоколы
- Клиент-серверное приложение
- Архитектура REST API
- Хэширование
- Тестирование (Unit-тесты)
- Работа с базами данных в Go (PostgreSQL, SQLite)
- Хэндлеры
- Многопоточность
- Docker
- Git
- Linux
- Swagger 2.0 (Open API 3.0)

## Другие проекты:

### DevOps&Clouds

В данной директории содержатся проекты по DevOpsи облачным технологиям, которые выполнялись в рамках дисциплины "Облачные технологии и услуги" в университете ИТМО.

### Python, C#

В данных директориях содержатся учебные проекты в рамках дисциплины "Объектно-ориентированное программирование", а также проекты в рамках хэндбука от Яндекса по алгоритмам и структурам данных.


### HTML, CSS, JS

В данных директориях содержатся проекты, которые я создавал во время самостоятельного изучения Frontend-технологий.
 
