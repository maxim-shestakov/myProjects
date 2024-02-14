output = []
n=int(input())

for j in range(n//5 + 1):
    for k in range(n//10 + 1):
        if j * 5 + k * 10 <= n:
            output.append((n - j * 5 - k * 10, j, k))

out = [f"{len(output)}"]

for o in output:
    test = f"{sum(o)} " + o[0] * "1 " + o[1] * "5 " + o[2] * "10 "
    out.append(test[:-1])

out = "\n".join(out)
print(out)