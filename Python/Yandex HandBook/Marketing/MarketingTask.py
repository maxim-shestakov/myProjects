n=int(input())
prices=input().split()
clicks=input().split()
for i in range(n):
    prices[i]=int(prices[i])
    clicks[i]=int(clicks[i])
prices.sort()
clicks.sort()
result=0
for i in range(n):
    result+=prices[len(prices)-1]*clicks[len(prices)-1]
    prices.remove(prices[len(prices)-1])
print(result)