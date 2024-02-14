from functools import lru_cache
@lru_cache()
def GCD(a, b,count):
    if a == 0 or b == 0:
        return max(a,b), count
    return GCD(b,a%b,count+1)

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
maxa=-1
maxb=-1
for i in range(n//2+3):
    curmaxa=Fib(i)
    curmaxb=Fib(i+1)
    if curmaxa<=n and curmaxb<=n:
        maxa,maxb=max(maxa,curmaxa),max(maxb,curmaxb)
    else:
        break

print(maxa,maxb)


