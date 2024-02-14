
def MaximumLoot(W,Costs_Weights):
    result=0
    i=1
    while W!=0 and len(Costs_Weights)!=(i-1):
        m=len(Costs_Weights)-i
        amount=min(W, Costs_Weights[m][1])
        value=Costs_Weights[m][0]*amount
        W-=amount
        result+=value
        i+=1
    return result

n,k,W=map(int,input().split())
c_w=[]
for i in range(k):
    ci,wi=map(int, input().split())
    c_w.append([ci,wi])
c_w.sort(key=lambda x:x[0])
price=MaximumLoot(W*n,c_w)
print(price)
