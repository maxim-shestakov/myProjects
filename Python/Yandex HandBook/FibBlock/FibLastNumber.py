def PisanoPeriod(n):
    period=0
    current=0
    next=1
    while True:
        oldnext=next
        next=(current+next) % n
        current=oldnext
        period+=1
        if current==0 and next==1:
            return period
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

n,m=map(int,input().split())
T=PisanoPeriod(m)
print(Fib(n%T)%m)
