def isBetter(first,second):
    if len(str(first))>=len(str(second)) and int(str(first)[len(str(first))-len(str(second)):])>=second or \
            len(str(first))<=len(str(second)) and first>=int(str(second)[:len(str(first))]):
        return True
    else:
        return False

def LargestConcatenate(Numbers):
    yourSalary = "" # пустая строка
    while len(Numbers)!=0:
        maxNumber = 0
        for number in Numbers:
            if isBetter(number,maxNumber):
                maxNumber = number
        yourSalary+=str(maxNumber) # добавляем число в конец
        Numbers.remove(maxNumber) # удалить из рассмотрения число maxNumber
    return yourSalary
n=int(input())
m=input().split()
for i in range(n):
    m[i]=int(m[i])
print(LargestConcatenate(m))