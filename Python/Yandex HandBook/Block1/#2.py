n=int(input())
a=input().split()
for i in range(len(a)):
    a[i]=int(a[i])
m=int(input())
b=input().split()
for i in range(len(b)):
    b[i]=int(b[i])
minl=10**5
if n<=m:
    minl=n
    a=[0]*(m-n)+a
else:
    minl=m
    b=[0]*(n-m)+b
s=''
for i in range(len(a)):
    s+=str(a[i]+b[i])+' '
print(max(n,m))
print(s)






