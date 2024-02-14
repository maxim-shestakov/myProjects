n=int(input())
if (2*n-3)<=1.5*n:
    print('No')
else:
    print('Yes')
    output=[str(n)]+[str(i) for i in range(1,n)]
    print(*output)
