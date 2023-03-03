import datetime

date_and_prod = {
    str(datetime.date(2022, 12, 1)): 'banana apple bread',
    str(datetime.date(2022, 12, 2)): 'milk snikers tea',
    str(datetime.date(2022, 12, 3)): 'meat cheese actimel',
    str(datetime.date(2022, 12, 4)): 'meat apple',
    str(datetime.date(2022, 12, 5)): 'tea sugar',
    str(datetime.date(2022, 12, 6)): 'water bread',
}
prod_and_price = {
    'milk': 68,
    'banana': 49,
    'bread': 25,
    'apple': 37,
    'snikers': 40,
    'water': 18,
    'tea': 350,
    'sugar': 28,
    'actimel': 37,
    'meat': 450,
    'cheese': 278,
}


def year_pr():
    year = input('Введите год покупки: ')
    while not (year.isdigit()):
        year = input('Введите год покупки правильно: ')
    year = int(year)
    while year > 2023 or year < 1900:
        year = input('Введите год покупки правильно: ')
        while not (year.isdigit()):
            year = input('Введите год покупки правильно: ')
        year = int(year)
    return year


def month_pr():
    month = input('Введите месяц покупки: ')
    while not (month.isdigit()):
        month = input('Введите месяц покупки правильно: ')
    month = int(month)
    while month > 12 or month < 1:
        month = input('Введите месяц покупки правильно: ')
        while not (month.isdigit()):
            month = input('Введите месяц покупки правильно: ')
        month = int(month)
    return month


def day_pr(months, month):
    day = input('Введите день покупки: ')
    while not (day.isdigit()):
        day = input('Введите день покупки правильно : ')
    day = int(day)
    while day > months[month - 1] or day < 1:
        day = input('Введите день покупки правильно : ')
        while not (day.isdigit()):
            day = input('Введите день покупки правильно: ')
        day = int(day)
    return day


def date_prod_upd():
    year = year_pr()
    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
        months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    else:
        months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    month = month_pr()
    day = day_pr(months, month)
    ans = input('Вы покупали продукты, которых раньше не было? \nY/N \n')
    while not (ans in ['Y', 'N']):
        ans = input('Ввод неверный, Вы покупали продукты, которых раньше не было? \nY/N \n')
    while ans == 'Y':
        new_prod = input('Введите название продукта: ')
        price_new_prod = 0
        while price_new_prod <= 0:
            price_new_prod = input('Введите цену продукта больше 0: ')
            while not (price_new_prod.isdigit()):
                price_new_prod = input('Введите цену товара числом: ')
            price_new_prod = float(price_new_prod)
        prod_and_price[new_prod] = price_new_prod
        ans = input('Есть ли ещё новые продукты? \nY/N \n')
        while not (ans in ['Y', 'N']):
            ans = input('Ввод неверный, есть ли ещё новые продукты? \nY/N \n')
    product_sp = input('Введите список продуктов через пробел: ')
    flag = 0
    while flag == 0 or product_sp == '':
        k=1
        while product_sp == '':
            product_sp = input('Ввод пустой, введите список продуктов: ')
        mas_pr = product_sp.split()
        for i in range(len(mas_pr)):
            if not (mas_pr[i] in list(prod_and_price.keys())):
                k=0
                product_sp = input('Ввод неверный, введите список продуктов из БАЗЫ: ')
                break
        if k==1:
            flag=1
    date_and_prod[str(datetime.date(year, month, day))] = product_sp
    print('Запись добавлена')





def delete_date_prod_price():
    ans = input('Запись по какому ключу Вы хотите удалить? \n1)Дата \n2)Наименование товара \n')
    while not (ans in ['1', '2']):
        ans = input('Ввод неверный, запись по какому ключу Вы хотите удалить? \n1)Дата \n2)Наименование товара \n')

    if ans == '1':
        year = year_pr()
        if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
            months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        else:
            months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        month = month_pr()
        day = day_pr(months, month)
        while not str(datetime.date(year, month, day)) in date_and_prod.keys():
            print('Введите данные из базы: ')
            year = year_pr()
            if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
                months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            else:
                months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            month = month_pr()
            day = day_pr(months, month)
        date_and_prod.pop(str(datetime.date(year, month, day)))
    if ans == '2':
        name = input('Введите наименование товара: ')
        while not name in prod_and_price.keys():
            name = input('Введите наименование товара из БАЗЫ: ')
        prod_and_price.pop(name)
    print('Запись удалена')


def date_prosmotr():
    year = year_pr()
    month = month_pr()
    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
        months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    else:
        months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    day = day_pr(months, month)
    while not (str(datetime.date(year, month, day)) in list(date_and_prod.keys())):
        print('Ввод неверный, попробуйте ещё раз: ')
        year = year_pr()
        month = month_pr()
        if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
            months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        else:
            months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        day = day_pr(months, month)
    print(date_and_prod[str(datetime.date(year, month, day))])


def price_prosmotr():
    name = input('Введите наименование товара: ')
    while not (name in list(prod_and_price.keys())):
        name = input('Введите наименование товара из БАЗЫ: ')
    print(prod_and_price[name])


def sort_key(m):
    return m[1]


def price_sp():
    print(sorted(prod_and_price.items(), key=sort_key))


while True:
    ans_start = input(
        'Здравствуйте, что Вы хотите сделать? \n1)Добавить покупку \n2)Посмотреть покупки по дате \n3)Посмотреть цену товара '
        '\n4)Просмотреть товары по стоимости \n5)Удалить записи \n6)Выйти из программы \n')
    while ans_start not in ['1', '2', '3', '4', '5', '6']:
        ans_start = input('Ввод неверный, попробуйте ещё раз: ')
    if ans_start == '1':
        date_prod_upd()
        print(date_and_prod.items())
        print(prod_and_price.items())
    elif ans_start == '2':
        date_prosmotr()
        print(date_and_prod.items())
        print(prod_and_price.items())
    elif ans_start == '3':
        price_prosmotr()
        print(date_and_prod.items())
        print(prod_and_price.items())
    elif ans_start == '4':
        price_sp()
        print(date_and_prod.items())
        print(prod_and_price.items())
    elif ans_start == '5':
        delete_date_prod_price()
        print(date_and_prod.items())
        print(prod_and_price.items())
    else:
        break
