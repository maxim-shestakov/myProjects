def GCD(a,b):
    while a>0 and b>0:
        if a>=b:
            a%=b
        else:
            b%=a
    return max(a,b)

a,b=map(int,input().split())
print(a*b//GCD(a,b)) #Так как LCM=a*b/GCD(a,b)