import random
from time import perf_counter
import timeit

m = []


def Partition(a, left, right):
    x = a[left]
    j = left
    for i in range(left + 1, right + 1):
        if a[i] <= x:
            j += 1
            a[j], a[i] = a[i], a[j]
    a[left], a[j] = a[j], a[left]
    return j


def QuickSort(a, left, right):
    if (left < right):
        m = Partition(a, left, right)
        QuickSort(a, left, m - 1)
        QuickSort(a, m + 1, right)


def combsort(m):
    l = len(m)
    shag = 1.247  # Обозначим шагом сравнения 1.247
    ex_shag = int(l / shag)
    s = 1
    while ex_shag > 1 or s > 0:
        s = 0
        i = 0
        while i + ex_shag < l:
            if m[i] > m[i + ex_shag]:
                m[i], m[i + ex_shag] = m[i + ex_shag], m[i]
                s += 1
            i += 1
        if ex_shag > 1:
            ex_shag = int(ex_shag / 1.247)
            print(m)
    print(m)


print('Программа выстраивания в очередь учеников по росту')
n = int(input('Введите количество учеников: '))
for i in range(n):
    el = float(input('Введите рост ученика: '))
    m.append(el)
flag = 0
while flag == 0:
    quest = input('QuickSort или Combsort?  \nQ/C : ')
    if quest == 'Q':
        t_start = perf_counter()
        QuickSort(m, 0, len(m) - 1)
        print(m)
        print(perf_counter() - t_start)
        flag = 1
    elif quest == 'C':
        t_start = perf_counter()
        combsort(m)
        print(perf_counter() - t_start)
        flag = 1
    else:
        flag = 0
# t_q = timeit.timeit(stmt=QuickSort(m,0,len(m)-1), number=100)
# t_c = timeit.timeit(stmt=combsort(m), number=100)
# print(t_q, t_c)
