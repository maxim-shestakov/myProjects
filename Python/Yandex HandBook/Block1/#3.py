n=int(input())
firstString=input()
secondString=input()
resultString=''
for i in range(n):
    resultString+=firstString[i]+secondString[i]
print(resultString)