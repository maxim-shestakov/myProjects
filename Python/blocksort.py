import random
def block_sort(mas):
    # Находим максимальное значение в списке. Затем используем длину списка, чтобы определить, какое значение в списке попадет в какой блок
    maximal = max(mas)
    size = maximal / len(mas)

    # Создаем n пустых блоков, где n равно длине входного списка
    blocks = []
    for x in range(len(mas)):
        blocks.append([])

        # Помещаем элементы списка в разные блоки на основе size
    for i in range(len(mas)):
        j = int(mas[i] / size)
        if j != len(mas):
            blocks[j].append(mas[i])
        else:
            blocks[len(mas) - 1].append(mas[i])

    # Сортируем элементы внутри блоков с помощью сортировки вставкой
    for z in range(len(mas)):
        insertion_sort(blocks[z])

    # Объединяем блоки с отсортированными элементами в один список
    final_output = []
    for x in range(len(mas)):
        final_output = final_output + blocks[x]
    return final_output

def insertion_sort(block):
    for i in range (1, len (block)):
        var = block[i]
        j = i - 1
        while (j >= 0 and var < block[j]):
            block[j + 1] = block[j]
            j = j - 1
        block[j + 1] = var
def main():
    mas = []
    mas_plus=[]
    mas_minus=[]
    n=int(input('Введите количество элементов: '))
    for i in range(n):
        mas.append(random.randint(-1000,1000))
    for i in range(n):
        if mas[i]>=0:
            mas_plus.append(mas[i])
        else:
            mas_minus.append(-mas[i])
    print('Изначальный список: ')
    print(mas)
    mas_sort_plus = block_sort(mas_plus)
    mas_sort_minus = block_sort(mas_minus)
    print('Отсортированный список: ')
    for i in range(len(mas_sort_minus)):
        mas_sort_minus[i]=mas_sort_minus[i]*(-1)
    print(mas_sort_minus[::-1]+mas_sort_plus)
main()