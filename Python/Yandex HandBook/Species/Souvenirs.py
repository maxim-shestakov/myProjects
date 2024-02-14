n,S=map(int,input().split())
prices=[]
for i in range(n):
    prices.append(int(input()))
prices.sort()
count=0
i=0
while S>0:
    if S-prices[i]>=0:
        S-=prices[i]
        count+=1
    else:
        break
    i+=1
print(count)