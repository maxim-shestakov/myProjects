n = int(input())
output = []

for i in range(n + 1):
    for j in range(n // 5 + 1):
        for k in range(n // 10 + 1):
            if i * 1 + j * 5 + k * 10 == n:
                output.append((i, j, k))

result = str(len(output)) + "\r\n"

for i in range(len(output)):
    length = str(sum(output[i]))
    firstPart = output[i][0] * "1 "
    secondPart = output[i][1] * "5 "
    thirdPart = output[i][2] * "10 "
    result += str(length) + " " + firstPart + secondPart + thirdPart
    if i != len(output) - 1:
        result += "\r\n"
print(result, end="\r\n")