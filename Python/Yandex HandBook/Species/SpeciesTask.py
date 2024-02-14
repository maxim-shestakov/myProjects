def MaximumLoot(W,Weights,Costs):
    value=0
    while W!=0 and len(Weights)*[0]!=Weights:
        m=Costs.index(max(Costs))
        amount=min(W, Weights[m])
        value+=Costs[m]*amount
        Weights[m]=0
        Costs[m]=-1
        W-=amount
    return value


n,W=map(int,input().split())
weights=[]
coasts=[]
for i in range(n):
    ci,wi=map(int,input().split())
    weights.append(wi)
    coasts.append(ci/wi)
total_coast=MaximumLoot(W,weights,coasts)


print(round(total_coast, 4))




