n=int(input())
s=input().split()
for i in range(n):
    s[i]=int(s[i])
firstMax=max(s)
c=s[-1]
s[-1]=firstMax
s[s.index(firstMax)]=c
s=s[:-1]
secondMax=max(s)

print(firstMax*secondMax)
