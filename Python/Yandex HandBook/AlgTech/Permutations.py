def Factorial(n,k):
    i=1
    s=1
    kFact=1
    nkFact=1
    new_n=n+k-1
    while i != new_n:
        i += 1
        s *= i
        if i==k:
            kFact=s
        if i==new_n-k:
            nkFact=s
    return s, kFact, nkFact


n,k=map(int, input().split())
answer=Factorial(n,k)
print(int(answer[0]/answer[1]/answer[2]))