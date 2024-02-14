n=int(input())
s=input().split()
for i in range(n):
    s[i]=int(s[i])
s.sort()
print(max(s[-1]*s[-2]*s[-3], s[0]*s[1]*s[-1]))
