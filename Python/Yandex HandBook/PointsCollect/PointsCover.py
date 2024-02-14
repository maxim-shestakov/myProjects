n,l=map(int,input().split())
m=input().split()
for i in range(n):
    m[i]=int(m[i])
count=0
m.sort()
m_copy=[]
# m_copy=[0]
# for i in range(len(m)-1):
#     m_copy.append(m[i+1]-m[i])
# print(m_copy)

while len(m)!=0:
    count+=1
    r_m=m[0]+l
    for i in m:
        if i>r_m:
            m_copy.append(i)
    m=m_copy.copy()
print(count)