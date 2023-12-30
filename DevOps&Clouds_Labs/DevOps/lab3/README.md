# Лабораторная работа № 3

## Автоматическая сборка docker-образа при пуше на github.


### Состав команды:
Кальянная №46:
+ Носов Александр (К3222)
+ Телунц Эдуард (К3221)
+ Шестаков Максим (К3221)
+ Будунов Будун (К3241)


### Цель:

Сделать, чтобы после пуша в ваш репозиторий автоматически собирался докер образ и результат его сборки сохранялся куда-нибудь. 

## Ход работы:

+ Создаем отдельный гитхаб репозиторий


+ В Actions создаем новый .yml файл (main.yml). Он делает следующее: при пуше в main запускается jobs, где мы авторизируемся в докер с помощью секретов, билдим и тегаем образ и в конце пушим в репозиторий докер хаб 
  
<img width="468" alt="image" src="https://github.com/Alex-Nosov-ITMO/Clouds_ITMO/blob/main/devops_labs/lab3/scrins/yml.jpg">





+ Заходим в actions secrets and variables и настраиваем секреты репозитория, закидываем туда username на докер хаб и access token. (Скрин 2)
 <img width="468" alt="image" src="https://github.com/Alex-Nosov-ITMO/Clouds_ITMO/blob/main/devops_labs/lab3/scrins/secrets.jpg">

+ Пушим на гитхаб докерфайл и все необходимые для сборки файлы


+ Проверяем что все сработало:
    + Заходим в actions и видим что все шаги успешно исполнены.\
      <img width="468" alt="image" src="https://github.com/Alex-Nosov-ITMO/Clouds_ITMO/blob/main/devops_labs/lab3/scrins/build.jpg">

    + Заходим в репозиторий докерхаб и находим там наш образ.\
      <img width="468" alt="image" src="https://github.com/Alex-Nosov-ITMO/Clouds_ITMO/blob/main/devops_labs/lab3/scrins/образ.jpg"> 


## Вывод:
Заходит как-то раз улитка в гитхаб и спрашивает: "А как сделать push так, чтобы автоматически собрался docker-образ?"


А бармен ей отвечает: "А уже все готово, глянь выше <3"
