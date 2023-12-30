# Лаброраторная работа №2

## Работа с контейнерами Docker. Испольщование good and bad practices в Dockerfile


### Состав команды:
Кальянная №46:
+ Носов Александр (К3222)
+ Телунц Эдуард (К3221)
+ Шестаков Максим (К3221)
+ Будунов Будун (К3241)


**Задание:** ***Написать два Dockerfile – плохой и хороший. Плохой должен запускаться и работать корректно, но в нём должно быть не менее 3 “bad practices”. В хорошем Dockerfile они должны быть исправлены. В Readme описать все плохие практики из кода Dockerfile и почему они плохие, как они были исправлены в хорошем  Dockerfile, а также две плохие практики по использованию этого контейнера***


### Создание плохого Dockerfile


![Плохой докерфайл](https://github.com/Alex-Nosov-ITMO/Clouds_ITMO/blob/main/devops_labs/lab2/scrins/плохой.jpg)


* `FROM ubuntu:latest`
  
    Так как целью нашего контейнера являлась передача скрипта на питоне, подгрузка ОС, так ещё и в версии latest, является ошибочной.
* `RUN apt-get update`
  
    `RUN apt-get install -y python3`
    
    `RUN apt-get install python3-pip -y`

    `RUN pip install matplotlib`

    `RUN pip install numpy`

  Несколько `RUN`, увеличивающие количество слоёв Dockerfile, что существенно замедляет его работу
* `ADD GCD.py ./`
  
  `ADD` вместо `COPY`, их разница состоит в том, что `COPY` более универсальный, может работать с архивами, в отличие от `ADD`
  
* `CMD ["python3", "./GCD.py"]`
  
  Использование CMD вместо ENTRYPOINT, в правилах хорошего тона писать Dockerfile нужно так, чтобы его содержимое было цельным продуктом, не требующим изменений. CMD же эти изменения сделать позволяет.


### Создание хорошего Dockerfile


![Хороший докерфайл](https://github.com/Alex-Nosov-ITMO/Clouds_ITMO/blob/main/devops_labs/lab2/scrins/хороший.jpg)


* `FROM python:3.10.12.` 
  
  Заменили родительский образ с Ubuntu на Python, что улучшило эффективность, так как ОС теперь не грузится.
* `RUN apt-get update && pip install matplotlib numpy`
   
    RUN-команды записаны в одну строку, лишних слоёв нет
* `COPY GCD.py ./`
  
  COPY вместо ADD для повышения универсальности
* `ENTRYPOINT ["python3", "./GCD.py"]`
  
  `ENTRYPOIN` вместо `CMD` для защиты от редактирования


### Сборка образов и запуск контейнеров.


После написания Dockerfile мы запустили сборку образа при помощи команды `docker build -t badpractice`. После чего с помощью команды `docker run badpractice` запустили контейнер для плохого Dockerfile. Для хорошего повторили аналогичные действия.

Как видно на скриншотах, контейнеры запустились корректно и отображаются в Docker Desktop.

* Запуск плохого контейнера.
  
    ![Запуск плохого](https://github.com/Alex-Nosov-ITMO/Clouds_ITMO/blob/main/devops_labs/lab2/scrins/запуск%20плохого.jpg)


* Запуск хорошего контейнера
  
  ![Запуск хорошего](https://github.com/Alex-Nosov-ITMO/Clouds_ITMO/blob/main/devops_labs/lab2/scrins/запуск%20хорошего.jpg)


* Наши образы в Decker Desktop
  
  ![Наши образы](https://github.com/Alex-Nosov-ITMO/Clouds_ITMO/blob/main/devops_labs/lab2/scrins/образы.jpg)


* Наши контейнеры в Docker Desktop
  
    ![Наши контейнеры](https://github.com/Alex-Nosov-ITMO/Clouds_ITMO/blob/main/devops_labs/lab2/scrins/контейнеры.jpg)



### Bad practice по использованию контейнера.

* Подгрузка операционной системы, когда содержимое контейнера от неё не зависит.
* Использовать НЕ изолированно от внешнего окружения компьютера, так как это может повлечь за собой ошибки.
* Не писать комментарии в Dockerfile, это ухудшает понимание файла в случае, если он обширный и включает в себя много команд.
