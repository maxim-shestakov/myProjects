n=int(input())
output=[]

for i in range(n+1):
    for j in range(n//5+1):
        for k in range(n//10+1):
            if i*1+j*5+k*10==n:
                output.append((i,j,k))
out=str(len(output))+'\n'
for i in range(len(output)):
    length=str(sum(output[i]))
    firstPart=output[i][0]*'1 '
    secondPart=output[i][1]*'5 '
    thirdPart=output[i][2]*'10 '
    if i!=len(output)-1:
        out+=str(length)+' '+firstPart+secondPart+thirdPart+'\n'
    else:
        out += str(length) + ' ' + firstPart + secondPart + thirdPart
print(out)

