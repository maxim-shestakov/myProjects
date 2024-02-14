def Fib(n):
    if n<=1:
        return n
    previous=0
    current=1
    for i in range(n-1):
        oldprevious=previous
        previous=current
        current=previous+oldprevious
    return current

n=int(input())
print(Fib(n))