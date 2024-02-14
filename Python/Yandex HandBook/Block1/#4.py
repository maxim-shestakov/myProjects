n,m=map(int,input().split())
a=[[0]*m]*n
b=[[0]*m]*n
result=[[0]*m]*n
for i in range(n):
    a_n=input().split()
    for r in range(m):
        a_n[r]=int(a_n[r])
    a[i]=a_n
for i in range(n):
    b_n=input().split()
    for r in range(m):
        b_n[r]=int(b_n[r])
    b[i]=b_n
for k in range(n):
    result=''
    for p in range(m):
        result+=str(a[k][p]+b[k][p])+' '
    print(result[:-1])
