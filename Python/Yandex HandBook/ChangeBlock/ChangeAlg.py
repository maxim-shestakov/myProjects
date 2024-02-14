n=int(input())
output=n//50*'50 '+n%50//20*'20 '+n%50%20//10*'10 '+n%10//5*'5 '+n%5*'1 '
output=output[:-1]
out_mas=output.split()
print(len(out_mas))

print(output)