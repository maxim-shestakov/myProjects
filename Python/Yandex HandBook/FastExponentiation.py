def FastIntegerExponentiation(x, n):
    if n == 0:
        return 1
    if n % 2 == 0: # чётное значение
        y = FastIntegerExponentiation(x, n/2)
        return y * y
    else: # нечётное значение
        y = FastIntegerExponentiation(x, (n-1)/2)
        return y * y * x

print(FastIntegerExponentiation(2,8))